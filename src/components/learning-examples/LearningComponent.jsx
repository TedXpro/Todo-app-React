import FirstComponent from "./FirstComponent"
import SecondComponent from "./SecondComponent"
import ThridComponent from "./ThridComponent"
import FourthComponent from './FourthComponent';
import { FifthComponent } from "./FirstComponent";
import LearningJavaScript from "./LearningJavaScript";

export default function LearningComponent() {  // App() component is the first to be loaded.
    return (
        <div className="App">
            <FirstComponent />
            <SecondComponent />
            <ThridComponent />
            <FourthComponent />
            <FifthComponent />
            <LearningJavaScript />
        </div>
    );
}
