import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse
import networkx as nx
import matplotlib as mpl
import matplotlib.pyplot as plt
import matplotlib.colors as mcolors
from random import randint

url_queue = ['http://h-farm.com']
G = nx.Graph()

seed = randint(0, 100000)
count = 20
draw = True


def draw(G, pos, measures, measure_name):
    nodes = nx.draw_networkx_nodes(G, pos, node_size=250, cmap=plt.cm.plasma,
                                   node_color=list(measures.values()),
                                   nodelist=measures.keys())
    nodes.set_norm(mcolors.SymLogNorm(linthresh=0.01, linscale=1, base=10))
    # labels = nx.draw_networkx_labels(G, pos)
    edges = nx.draw_networkx_edges(G, pos)

    plt.title(measure_name)
    plt.colorbar(nodes)
    plt.axis('off')
    plt.show()

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

"""

nx.draw(G, layout, with_labels=True)  # networkx draw()

if draw:
    plt.draw()  # pyplot draw()
    plt.show()
else:
    plt.savefig('tmp.png')
"""
draw(G, layout, nx.eigenvector_centrality(G), 'Eigenvector Centrality')

