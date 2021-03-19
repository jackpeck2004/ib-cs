import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse
import networkx as nx

url_queue = ['http://h-farm.com']
graph = nx.Graph()

while not len(url_queue) == 0:
    url = url_queue.pop()
    parsed_url = urlparse(url)
    base_url = f'{parsed_url.scheme}://{parsed_url.netloc}'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    for tag in soup.find_all('a'):
        href = tag['href']
        parsed_href = urlparse(href)
        if bool(parsed_href.netloc):
            url_queue.append(href)
        else:
            url_queue.append(f'{base_url}{href}')