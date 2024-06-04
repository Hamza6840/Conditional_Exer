export default function IItem({ name, importance }) {
    return (
  <li className="item">
    {name} {importance > 0 && <i>importance: {importance}</i>}
  </li>
    );
  }