// Link.jsx
export default function Link({ to, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", to);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
