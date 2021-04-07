import os
from urllib.parse import urlparse

import networkx as nx
import requests
from bs4 import BeautifulSoup

import lib.functions as fn

url_queue = ['http://h-farm.com']
G = nx.Graph()

count = 20
seed = count

filename = f"{urlparse(url_queue[0]).netloc}_{seed}.json"
file_path = f"out/{filename}"

# Check if a saved graph already exists
if not os.path.exists(file_path):
    # If not scrape the website and create graph
    while not len(url_queue) == 0 and count - 1:
        url = url_queue.pop()
        parsed_url = urlparse(url)
        base_url = f'{parsed_url.scheme}://{parsed_url.netloc}'
        print(f'{abs(count)}:\t{base_url}')
        count -= 1
        try:
            response = requests.get(url)
            soup = BeautifulSoup(response.text, 'html.parser')
            for tag in soup.find_all('a'):
                href = tag['href']
                parsed_href = urlparse(href)
                new_url = href
                if not bool(parsed_href.netloc):
                    new_url = f'{base_url}{href}'
                if new_url not in G:
                    url_queue.append(new_url)
                else:
                    print("already in graph")
                G.add_edge(url, new_url)
        except Exception as e:
            print("Error:", e)

    # Write the graph to a file
    try:
        fn.write_graph_to_file(file_path, G)
    except Exception as e:
        print("Error when writing file:", e)

# Check if graph is empty
if nx.is_empty(G):
    # Attempt to read Graph from past saved graph from json file
    try:
        G = fn.read_graph_from_file(file_path)
    except Exception as e:
        print("Error when reading file:", e)

# Draw graph
layout = nx.spring_layout(G, scale=3)
fn.draw(G, layout, nx.eigenvector_centrality(G), 'Eigenvector Centrality')
