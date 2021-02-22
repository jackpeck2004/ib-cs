#!/usr/bin/env python3

from node import Node

_4 = Node(4, None, None)
_5 = Node(5, None, None)
root = Node(10, _4, _5)

def print_pre_order(currentNode):
  if currentNode is None:
    return

  print(currentNode.key)
  print_pre_order(currentNode.left)
  print_pre_order(currentNode.right)

def print_post_order(currentNode):
  if currentNode is None:
    return

  print_pre_order(currentNode.left)
  print_pre_order(currentNode.right)
  print(currentNode.key)

def print_in_order(currentNode):
  if currentNode is None:
    return

  print_pre_order(currentNode.left)
  print(currentNode.key)
  print_pre_order(currentNode.right)

print_pre_order(root)
