"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { ToastContext } from "../../../../components/ToastProvider";

function ContactPage() {
  const router = useRouter();
  const { createToast } = React.useContext(ToastContext);
  function handleSubmit(event) {
    event.preventDefault();
    router.push("/exercises/02-flash-messages");
    createToast(
      "Your message has been received! We'll be in touch shortly",
      "success"
    );
  }
  return (
    <main>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
