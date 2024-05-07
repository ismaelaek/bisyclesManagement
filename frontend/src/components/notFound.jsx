import React from 'react'
import { Link } from 'react-router-dom'
import { TbError404 } from "react-icons/tb";


export default function NotFound() {
  return (
		<main className="container flex items-center justify-center h-96">
          <div className='flex flex-col justify-center'>
                <TbError404 size={100} />
				<h1>404 Not Found</h1>
				<p>The page you are looking for does not exist.</p>
				<Link to="/">Back to Home</Link>
			</div>
		</main>
	);
}
