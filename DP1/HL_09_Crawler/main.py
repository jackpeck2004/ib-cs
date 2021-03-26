import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse
import networkx as nx
import matplotlib as mpl
import matplotlib.pyplot as plt
from random import randint

url_queue = ['http://h-farm.com']
G = nx.Graph()

seed = randint(0, 100000)
count = 20
draw = True

while not len(url_queue) == 0 and count > 0:
    url = url_queue.pop()
    parsed_url = urlparse(url)
    base_url = f'{parsed_url.scheme}://{parsed_url.netloc}'
    print(f'{count}:\t{base_url}')
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
            if not new_url in G:
                url_queue.append(new_url)
            else:
                print("already in graph")
            G.add_edge(url, new_url)
    except Exception as e:
        print("Error:", e)

layout = nx.spring_layout(G, scale=3)

nx.draw(G, layout, with_labels=True)  # networkx draw()

if draw:
    plt.draw()  # pyplot draw()
    plt.show()
else:
    plt.savefig('tmp.png')
