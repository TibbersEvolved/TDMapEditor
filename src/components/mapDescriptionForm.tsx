import type { FormEvent } from "react";

export default function MapDescriptionForm(props: prop) {
  let name = props.name;

  function formAction(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log((e.currentTarget.elements[0] as HTMLInputElement).value);
    props.func((e.currentTarget.elements[0] as HTMLInputElement).value);
  }

  return (
    <>
      <form onSubmit={(e) => formAction(e)}>
        <input type="text" name="message" placeholder={name} />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

type prop = {
  name: string;
  func: (s: string) => void;
};
