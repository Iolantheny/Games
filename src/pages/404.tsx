import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div className="error">
      <div>
        <h1>404</h1>
        <p>...page not find</p>
        <Link to="/">go back to games</Link>
      </div>
    </div>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
