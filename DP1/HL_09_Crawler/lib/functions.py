import json

import matplotlib.colors as mcolors
import matplotlib.pyplot as plt
import networkx as nx
from networkx.readwrite import json_graph


def draw(graph, pos, measures, measure_name):
    """
    Uses matplotlib to plot nx Graph based on features passed
    on as arguments
    :param graph: The graph to print (G)
    :param pos: Dictionary of nodes and their position, the layout
                of the graph (i.e. nx.spring_layout)
    :param measures: What to classify the nodes by
                    (i.e. nx.eigenvector_centrality)
    :param measure_name: Label for the classification of the nodes
    """
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
    """

    :param file: JSON file from which to read the NetworkX Graph
    :return: NetworkX Graph
    """
    with open(file, "r") as f:
        raw_graph = json.load(f)
        return json_graph.node_link_graph(raw_graph)


def write_graph_to_file(file, graph):
    """

    :param file: Name of file to write the graph to
    :param graph: Graph which will be written to the file
    :return: bool: True if write succeeds, False if there is
            an Error which is printed
    """
    data = json_graph.node_link_data(graph)
    try:
        with open(file, "w") as f:
            json.dump(data, f, indent=4)
        return True
    except Exception as e:
        print("Error writing file to graph", e)
        return False
