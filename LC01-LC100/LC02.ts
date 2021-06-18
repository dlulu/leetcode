// 2. 两数相加 https://leetcode-cn.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 **/
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

/**
 * 同时遍历两个链表，从两个链表表头开始依次取数据存入新的链表中
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode();
  let current = head;
  let shouldAdd1 = false;
  while (l1 || l2) {
    const val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (shouldAdd1 ? 1 : 0);
    // 保存进位信息
    shouldAdd1 = val > 9;
    current.val = val % 10;
    // 到最长链表表尾时就不创建next节点了
    if (l1 && l1.next || l2 && l2.next) {
      current.next = new ListNode();
      current = current.next;
    }
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  // 遍历完以后遗留进位信息说明总体上是要多出一位的，因此在末尾补上一个节点
  if (shouldAdd1) {
    current.next = new ListNode(1);
  }
  return head;
};