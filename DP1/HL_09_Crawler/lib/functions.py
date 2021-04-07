import networkx as nx
import matplotlib.pyplot as plt
import matplotlib.colors as mcolors


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

