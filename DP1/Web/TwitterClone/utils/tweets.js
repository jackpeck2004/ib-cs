const extractHashtags = (tweetContent) => {
  const hashtags = [];
  let currentHashtag = '';
  let hashtagFound = false;

  for (let i = 0; i < tweetContent.length; i += 1) {
    const char = tweetContent.charAt(i);

    if (hashtagFound === true) {
      if (char === ' ') {
        hashtagFound = false;
        hashtags.push(currentHashtag);
        currentHashtag = '';
      } else if (i === tweetContent.length - 1) {
        currentHashtag += char;
        hashtagFound = false;
        hashtags.push(currentHashtag);
        currentHashtag = '';
      } else {
        currentHashtag += char;
      }
    } else if (char === '#') {
      hashtagFound = true;
    }
  }
  return hashtags;
};

module.exports = {
  extractHashtags,
};
