import Image from "next/image"

function NotFoundPage() {
	return (
		<section className="w-full flex flex-col items-center justify-center">
			<Image src="/assets/not-found.png" alt="404" width={350} height={350} />
			<h1 className="text-2xl">404 | Page Not Found!</h1>
		</section>
	)
}

export default NotFoundPage