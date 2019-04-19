import ReactSpring from "./components/react-spring/ReactSpring";
import ReactPose from "./components/react-pose/ReactPose";
import CSSTransition from "./components/css-transition/CSSTransition";
import StyledComponents from "./components/styled-components/StyledComponents";
import ReactMotion from "./components/react-motion/ReactMotion";
import ReactMotionHome from "./components/react-motion/ReactMotionHome";

export default [
    { path: 'react-spring', label: 'React Spring', exact: true, component: ReactSpring },
    { path: 'react-pose', label: 'React Pose', exact: true, component: ReactPose },
    { path: 'css-transition', label: 'CSS Transition', exact: true, component: CSSTransition },
    { path: 'mauerwerk-gallery', label: 'Mauerwerk Gallery', exact: true, component: StyledComponents },
    { path: 'react-flip-toolkit', label: 'React Flip Toolkit', exact: true, component: StyledComponents },
    { path: 'react-animated-slider', label: 'React Animated Slider', exact: true, component: StyledComponents },
    { path: 'react-compare-image', label: 'React Compare Image', exact: true, component: StyledComponents },
]