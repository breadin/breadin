// Typewriter 효과
const statement = `I am a multidisciplinary designer focused on visual direction, generative media, and AI-assisted image-making. My work translates personal questions and cultural observations into visual systems, moving images, spatial concepts, and interactive experiences.

With a background in digital media and fashion studies, I approach design through conceptual research, visual experimentation, and emerging technologies. I am particularly interested in how AI and digital systems shape perception, identity, and behavior, and how these tools can be directed to create clear and emotionally engaging visual experiences.

My practice combines image-making, motion, branding, interaction, creative technology, and AI-based workflows, aiming to create work that is experimental, thoughtful, and visually distinctive.`;

let i = 0;
const speed = 20;
function typeWriter() {
  if (i < statement.length) {
    document.getElementById("typewriter").innerHTML += statement.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener('load', typeWriter);

// 마우스 오버 Tooltip
const tooltip = document.getElementById('tooltip');
document.querySelectorAll('.item').forEach(el => {
  el.addEventListener('mouseenter', e => {
    tooltip.innerText = el.dataset.description;
    tooltip.style.display = 'block';
  });
  el.addEventListener('mousemove', e => {
    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });
  el.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});