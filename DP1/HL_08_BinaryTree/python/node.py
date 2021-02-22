class Node(object):
  def __init__(self, key, left, right):
    self.key = key
    self.left = left
    self.right = right

  def __check_current_node(self, currentNode):
    if currentNode == "ciao":
      return self
    return currentNode

  def print_pre_order(self, currentNode="ciao"):
    currentNode = self.__check_current_node(currentNode)

    if currentNode is None:
      return

    print(currentNode.key)
    self.print_pre_order(currentNode.left)
    self.print_pre_order(currentNode.right)

  def print_post_order(self, currentNode="ciao"):
    currentNode = self.__check_current_node(currentNode)

    if currentNode is None:
      return

    self.print_post_order(currentNode.left)
    self.print_post_order(currentNode.right)
    print(currentNode.key)

  def print_in_order(self, currentNode="ciao"):
    currentNode = self.__check_current_node(currentNode)

    if currentNode is None:
      return

    self.print_in_order(currentNode.left)
    print(currentNode.key)
    self.print_in_order(currentNode.right)
