/**
 * @review - updates the progress bar length
 *
 * @param start {number} - The starting percentage
 * @param end {number} - ending percentage
 */

function full(start, end) {
  document.querySelectorAll('.progress_bar').forEach((element) => {
    for (let i = start + 1; i <= end; i++) {
      let percentage = i + "%";
      element.style.width = percentage;
      element.innerText = percentage;
    }
  });
}
