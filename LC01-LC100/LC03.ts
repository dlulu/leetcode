// 3. 无重复字符的最长子串 https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * 利用贪心算法解决，让右下标一直向后走，期间将每个出现的字符的下标用map保存起来，在出现重复的字符时，
 * 左下标向后移动一位，并计算此时和原来相比的最大长度
 */
function lengthOfLongestSubstring(s: string): number {
  let leftIndex = 0;
  let maxLen = 0;
  let map = new Map<string, number>();
  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    // 在map中尝试获取当前字符在前面字符中重复位置的下标
    const repeatIndex = map.get(s[rightIndex]);
    // 如果下标存在，并且在找到的位置或者其左侧，则将左侧下标指针右移一位
    if (repeatIndex >= 0 && leftIndex <= repeatIndex) {
      leftIndex = repeatIndex + 1;
    }
    // 右移后计算一次最大的值并保存
    maxLen = Math.max(maxLen, rightIndex - leftIndex + 1);
    map.set(s[rightIndex], rightIndex);
  }
  return maxLen;
};