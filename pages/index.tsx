import PostFeed from "@/components/posts/PostFeed"
import Header from "@/components/Header"
import Form from "@/components/Form"

export default function Home() {
  return (
    <>
      <Header label="REACTOR" />
      <Form placeholder="Type here" />
      <PostFeed />
    </>
  )
}
