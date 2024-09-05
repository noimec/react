export function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div style={{marginBottom: "50px"}}>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
