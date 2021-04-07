import json

import matplotlib.colors as mcolors
import matplotlib.pyplot as plt
import networkx as nx
from networkx.readwrite import json_graph


def draw(graph, pos, measures, measure_name):
    nodes = nx.draw_networkx_nodes(graph, pos, node_size=250, cmap=plt.cm.plasma,
                                   node_color=list(measures.values()),
                                   nodelist=measures.keys())
    nodes.set_norm(mcolors.SymLogNorm(linthresh=0.01, linscale=1, base=10))
    # labels = nx.draw_networkx_labels(G, pos)
    edges = nx.draw_networkx_edges(graph, pos)

    plt.title(measure_name)
    plt.colorbar(nodes)
    plt.axis('off')
    plt.show()


def read_graph_from_file(file):
    with open(file, "r") as f:
        raw_graph = json.load(f)
        return json_graph.node_link_graph(raw_graph)


def write_graph_to_file(file, graph):
    data = json_graph.node_link_data(graph)
    with open(file, "w") as f:
        json.dump(data, f, indent=4)
