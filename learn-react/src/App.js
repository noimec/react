import Form from "./Form";
import Gallery from "./Gallery";
import MovingDot from "./MovingDot";
import { Toolbar } from "./Toolbar";

export default function App() {
  return (
    <>
      <Toolbar
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
      <Gallery />
      <Form/>
      <MovingDot/>
    </>
  );
}
