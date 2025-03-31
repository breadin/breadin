// Typewriter 효과
const statement = `youngin kim is a media artist working primarily with video and installation, exploring themes that begin with the personal and expand into the collective and societal realms. Her practice is rooted in a deep curiosity about how advancements in technology influence individuals and society at large. Central to her work is an investigation into the interplay between human consciousness—both conscious and unconscious—and the technological systems that increasingly shape perceptions and decisions.`;

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