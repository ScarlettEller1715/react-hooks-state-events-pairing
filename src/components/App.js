import video from "../data/video.js";
import RenderVideo from "./RenderVideo.js";
import RenderComments from "./RenderComments.js";

function App() {

  return (
    <div className="App">
      <RenderVideo video={video}/>
      <RenderComments comments={video.comments} />
    </div>
  );
}

export default App;
