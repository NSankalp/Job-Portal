const Strings = `Strings Complete Revision Guide

1. Introduction to Strings
A **string** is a sequence of characters stored as an array. It can be immutable (like in Python, Java) or mutable (like in C++ using std::string).  

### 2. Common String Operations
- **Concatenation** → Combining two strings.
- **Substring** → Extracting part of a string.
- **Reversal** → Reversing a string.
- **Comparison** → Checking if two strings are equal.
- **Searching** → Finding a substring within a string.
- **Tokenization** → Splitting a string into words.

### 3. String Implementation in Different Languages
#### C (Character Arrays)
\`\`\`c
char str[] = "hello";
\`\`\`
#### C++ (std::string)
\`\`\`c
string s = "hello";
\`\`\`
#### Java
\`\`\`java
String s = "hello";
\`\`\`
#### Python
\`\`\`python
s = "hello"
\`\`\`

### 4. Important String Algorithms

#### 1. **Reverse a String**
\`\`\`c
void reverseString(string &s) {
    reverse(s.begin(), s.end());
}
\`\`\`

#### 2. **Check if a String is Palindrome**
\`\`\`c
bool isPalindrome(string s) {
    int l = 0, r = s.size() - 1;
    while (l < r) if (s[l++] != s[r--]) return false;
    return true;
}
\`\`\`

#### 3. **Check if Two Strings are Anagrams**
\`\`\`c
bool isAnagram(string s, string t) {
    sort(s.begin(), s.end());
    sort(t.begin(), t.end());
    return s == t;
}
\`\`\`

#### 4. **Find the Longest Common Prefix**
\`\`\`c
string longestCommonPrefix(vector<string>& strs) {
    string prefix = strs[0];
    for (int i = 1; i < strs.size(); i++) {
        while (strs[i].find(prefix) != 0) prefix = prefix.substr(0, prefix.size() - 1);
    }
    return prefix;
}
\`\`\`

#### 5. **Find the First Non-Repeating Character**
\`\`\`c
char firstUniqueChar(string s) {
    unordered_map<char, int> freq;
    for (char c : s) freq[c]++;
    for (char c : s) if (freq[c] == 1) return c;
    return '_';
}
\`\`\`

#### 6. **Implement strstr() (Find Substring in String)**
\`\`\`c
int strstr(string haystack, string needle) {
    return haystack.find(needle);
}
\`\`\`

#### 7. **Remove Duplicates from a String**
\`\`\`c
string removeDuplicates(string s) {
    unordered_set<char> seen;
    string res;
    for (char c : s) if (seen.insert(c).second) res += c;
    return res;
}
\`\`\`

#### 8. **Group Anagrams**
\`\`\`c
vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> mp;
    for (string s : strs) {
        string key = s;
        sort(key.begin(), key.end());
        mp[key].push_back(s);
    }
    vector<vector<string>> res;
    for (auto it : mp) res.push_back(it.second);
    return res;
}
\`\`\`

#### 9. **Z Algorithm (Pattern Matching)**
\`\`\`c
vector<int> zFunction(string s) {
    int n = s.size();
    vector<int> z(n);
    int l = 0, r = 0;
    for (int i = 1; i < n; i++) {
        if (i <= r) z[i] = min(r - i + 1, z[i - l]);
        while (i + z[i] < n && s[z[i]] == s[i + z[i]]) z[i]++;
        if (i + z[i] - 1 > r) l = i, r = i + z[i] - 1;
    }
    return z;
}
\`\`\`

#### 10. **KMP Algorithm (Pattern Searching)**
\`\`\`c
vector<int> computeLPS(string s) {
    int n = s.size(), len = 0;
    vector<int> lps(n, 0);
    for (int i = 1; i < n; i++) {
        while (len > 0 && s[i] != s[len]) len = lps[len - 1];
        if (s[i] == s[len]) lps[i] = ++len;
    }
    return lps;
}
\`\`\`

### 5. Advanced String Problems

#### **5.1 Longest Palindromic Substring**
\`\`\`c
string longestPalindrome(string s) {
    int n = s.size(), start = 0, maxLen = 1;
    vector<vector<bool>> dp(n, vector<bool>(n, false));
    
    for (int i = 0; i < n; i++) dp[i][i] = true;
    
    for (int len = 2; len <= n; len++) {
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1;
            if (s[i] == s[j] && (len == 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                if (len > maxLen) maxLen = len, start = i;
            }
        }
    }
    return s.substr(start, maxLen);
}
\`\`\`

#### **5.2 Rabin-Karp Algorithm (Substring Search)**
\`\`\`c
int rabinKarp(string txt, string pat, int q) {
    int d = 256, n = txt.size(), m = pat.size(), h = 1, p = 0, t = 0;
    for (int i = 0; i < m - 1; i++) h = (h * d) % q;
    
    for (int i = 0; i < m; i++) {
        p = (d * p + pat[i]) % q;
        t = (d * t + txt[i]) % q;
    }
    
    for (int i = 0; i <= n - m; i++) {
        if (p == t && txt.substr(i, m) == pat) return i;
        if (i < n - m) t = (d * (t - txt[i] * h) + txt[i + m]) % q;
        if (t < 0) t += q;
    }
    return -1;
}
\`\`\`

#### **5.3 Word Break Problem**
\`\`\`c
bool wordBreak(string s, vector<string>& wordDict) {
    unordered_set<string> dict(wordDict.begin(), wordDict.end());
    vector<bool> dp(s.size() + 1, false);
    dp[0] = true;
    
    for (int i = 1; i <= s.size(); i++)
        for (int j = 0; j < i; j++)
            if (dp[j] && dict.count(s.substr(j, i - j))) dp[i] = true;
    
    return dp[s.size()];
}
\`\`\`

### 6. Strings in Competitive Programming
- **Reversing Words in a Sentence**
- **Removing Consecutive Duplicates**
- **Lexicographically Smallest String**
- **Find all Permutations of a String**
- **Substring Search (KMP, Rabin-Karp, Z Algorithm)**

### 7. Important String Interview Questions
- **Find the longest palindromic substring**
- **Check if two strings are rotations of each other**
- **Implement a Trie for efficient search**
- **Find the longest common substring**
- **String compression (Run-Length Encoding, Huffman Coding)**

This guide covers all essential concepts, problems, and implementations for strings. 📚🚀`;

export default Strings;
