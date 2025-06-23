import './DefaultButton.css';

export default function DefaultButton({ text, onClick }) {
  return (
    <button className="default-button" onClick={onClick}>
      {text}
    </button>
  );
}
