import Button from "./button";
import ProgressBar from "./progress_bar";

export default function ApiButton(props) {
  return (
    <>
      {props.isLoading[props.name || props.children] ? (
        <Button disabled {...props}>
          <ProgressBar />
        </Button>
      ) : (
          <Button {...props}>
            {props.children}
          </Button >
        )
      }

    </>
  )
}