// Typewriter 효과
const statement = `I am a media artist working primarily with video and installation. My work begins from personal questions and experiences, which I then expand into collective and societal contexts.

My practice is driven by a deep curiosity about how technological advancements influence individuals and society at large. I am particularly interested in the ways technology shapes perception, behavior, and decision-making processes.

At the core of my work is an investigation into the interplay between human consciousness—both conscious and unconscious—and the technological systems that increasingly structure how we experience and understand the world.`;

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