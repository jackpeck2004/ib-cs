#!/usr/bin/env python3

from node import Node

_4 = Node(4, None, None)
_5 = Node(5, None, None)
root = Node(10, _4, _5)

root.print_pre_order()
root.print_post_order()
root.print_in_order()

