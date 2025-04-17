import React, { useState } from "react";

interface Post {
    url: string;
    frontmatter: {
        title: string;
        description: string;
        date: string;
        duration: string;
        category: string;
        tags: string[];
        tech: string[];
        featured: boolean;
        imageCover: string;
        images: string[];
        demoLink: string;
        repoLink: string;
        role: string;
        company: string;
        collaboration: boolean;
    };
}

const Card = ({ post }: { post: Post }) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <article>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        openModal();
                    }}
                    className="flex flex-col gap-4 p-4 cursor-pointer bg-neutral-800 rounded-lg shadow-md outline-4 outline-neutral-400/15 hover:shadow-2xl hover:shadow-neutral-800 transition-shadow duration-500"
                >
                    <section className="relative">
                        <img
                            src={post.frontmatter.imageCover}
                            alt={post.frontmatter.title}
                            width={500}
                            height={500}
                            className="w-full object-cover aspect-1/1 rounded-md"
                        />
                        {post.frontmatter.category && (
                            <span className="absolute top-2 left-2 bg-gradient-to-r from-primary-700 to-primary-500 text-neutral-300 text-xs font-light px-2 py-1 rounded-md">
                                {post.frontmatter.category}
                            </span>
                        )}
                    </section>
                    <section className="flex flex-col gap-2 text-left">
                        <h2 className="font-thin text-4xl">{post.frontmatter.title}</h2>
                        <p className="text-neutral-400 line-clamp-3">
                            {post.frontmatter.description}
                        </p>
                        <ul className="flex flex-wrap gap-2">
                            {post.frontmatter.tech.map((item) => (
                                <li
                                    key={item}
                                    className="text-neutral-400 text-sm font-light bg-neutral-700 px-2 py-1 rounded-md"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                </button>

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 ">
                        <div className="absolute inset-0 z-0 cursor-pointer bg-black/30  backdrop-blur-md animate-fade-in" onClick={closeModal} />
                        <div className="w-11/12 sm:outline-4 sm:outline-neutral-400/15 relative bg-neutral-800 z-10 rounded-2xl shadow-lg max-w-xl animate-slide-in ">
                            <button
                                onClick={closeModal}
                                className="absolute cursor-pointer top-2 right-2 text-neutral-400 flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-700 transition-colors duration-300"
                            >
                                <span className="absolute w-5 h-[1px] bg-neutral-400 rotate-45 transform transition-transform duration-300" />
                                <span className="absolute w-5 h-[1px] bg-neutral-400 -rotate-45 transform transition-transform duration-300" />
                            </button>
                            <h2 className="font-thin text-5xl mb-4 px-6 pt-6">
                                {post.frontmatter.title}
                            </h2>
                            <div className="grid max-h-[calc(100vh-25rem)] sm:max-h-[calc(100vh-40rem)] overflow-auto touch-auto will-change-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500">
                                {post.frontmatter.images.map((image, index) => (
                                    <img
                                        key={`image-${index}`}
                                        src={image}
                                        alt={post.frontmatter.title}
                                        className="w-full object-cover"
                                    />
                                ))}
                                {post.frontmatter.images.map((image, index) => (
                                    <img
                                        key={`image-${index}`}
                                        src={image}
                                        alt={post.frontmatter.title}
                                        className="w-full object-cover"
                                    />
                                ))}
                            </div>
                            <div className="py-4 px-6 flex flex-wrap justify-center sm:justify-end gap-4">
                                {
                                    post.frontmatter.demoLink && (
                                        <a
                                            href={post.frontmatter.demoLink}
                                            target="_blank"
                                            className="bg-neutral-700 w-full sm:w-fit rounded flex items-center px-4 py-2 justify-center text-sm shadow hover:shadow-2xl transition-colors duration-300"
                                            title="Live Demo"
                                            rel="noopener noreferrer"
                                        >
                                            {post.frontmatter.demoLink}
                                        </a>
                                    )
                                }
                                {
                                    post.frontmatter.repoLink && (
                                        <a
                                            href={post.frontmatter.repoLink}
                                            target="_blank"
                                            className="bg-neutral-900 rounded-full w-10 h-10 flex items-center justify-center shadow hover:shadow-2xl transition-colors duration-300"
                                            title="GitHub Repository"
                                            rel="noopener noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="fill-neutral-300 w-8 h-8"
                                            >
                                                <title>GitHub</title>
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M4.55323 2.6781C4.69107 2.27266 5.07177 2 5.5 2C7.07024 2 8.45202 2.84357 9.20296 3.39309C9.74352 3.23273 10.6902 3 12 3C13.3098 3 14.2565 3.23274 14.797 3.39309C15.548 2.84357 16.9298 2 18.5 2C18.9282 2 19.3089 2.27266 19.4468 2.6781C19.7923 3.69435 19.813 4.87994 19.5931 5.82503C20.2804 6.91596 20.5 8.0495 20.5 9.5C20.5 11.8214 19.9911 13.5508 18.6698 14.7426C17.8334 15.497 16.9453 15.9827 15.9415 16.2566C15.9647 16.3895 15.9795 16.5142 15.9896 16.6252C16.0271 17.0353 16.0132 17.5056 16.0047 17.7941C16.0021 17.8818 16 17.9527 16 18V20.9998C16 21.5521 15.5523 22 15 22C14.4477 22 14 21.5523 14 21V18C14 17.8568 14.0041 17.7231 14.0081 17.5927C14.016 17.334 14.0236 17.0883 13.9979 16.8073C13.9601 16.3941 13.8681 16.2782 13.8613 16.2697C13.861 16.2693 13.8612 16.2696 13.8613 16.2697C13.5504 16.0114 13.4252 15.5907 13.5447 15.2045C13.6641 14.8183 14.0044 14.542 14.4069 14.5043C15.5993 14.3928 16.4823 14.0222 17.3302 13.2574C18.0489 12.6092 18.5 11.5586 18.5 9.5C18.5 8.13956 18.2806 7.37416 17.7 6.6C17.4958 6.32779 17.4441 5.97045 17.5627 5.65151C17.7048 5.26928 17.7728 4.6914 17.7174 4.11364C16.8376 4.35801 16.0466 4.93863 15.63 5.27656C15.3842 5.47605 15.0583 5.54731 14.7516 5.46866C14.6588 5.44485 14.5561 5.41314 14.4404 5.37739C13.948 5.22523 13.2191 5 12 5C10.7809 5 10.052 5.22523 9.55957 5.37739C9.44388 5.41314 9.34125 5.44485 9.24838 5.46866C8.94167 5.54731 8.61584 5.47605 8.36996 5.27656C7.95343 4.93863 7.16244 4.35801 6.28263 4.11364C6.22723 4.6914 6.2952 5.26928 6.43731 5.65151C6.55589 5.97045 6.50416 6.32779 6.3 6.6C5.71938 7.37416 5.5 8.13956 5.5 9.5C5.5 11.5586 5.95108 12.6092 6.66977 13.2574C7.51769 14.0222 8.40072 14.3928 9.59312 14.5043C9.99563 14.542 10.3359 14.8183 10.4553 15.2045C10.5748 15.5907 10.45 16.0109 10.139 16.2692C10.1391 16.2691 10.1394 16.2688 10.139 16.2692C10.1322 16.2777 10.0399 16.3941 10.0021 16.8073C9.97642 17.0883 9.98396 17.334 9.9919 17.5927C9.9959 17.7231 10 17.8568 10 18V20.9998C10 21.5521 9.55228 22 9 22C8.44772 22 8 21.5523 8 21V18C8 17.9527 7.99791 17.8818 7.99532 17.7941C7.98681 17.5056 7.97293 17.0353 8.0104 16.6252C8.02055 16.5142 8.03531 16.3895 8.05849 16.2566C7.05466 15.9827 6.16663 15.497 5.33023 14.7426C4.00892 13.5508 3.5 11.8214 3.5 9.5C3.5 8.04951 3.71963 6.91596 4.40688 5.82503C4.18704 4.87994 4.2077 3.69435 4.55323 2.6781Z"
                                                ></path>
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M2.1174 15.0297C2.37709 14.5423 2.98275 14.3577 3.47017 14.6174C4.26577 15.0413 4.73746 15.5927 5.09114 16.0541C5.16352 16.1486 5.22797 16.2342 5.28682 16.3123C5.53555 16.6427 5.68408 16.84 5.90778 17.0083C6.5979 17.5188 7.82016 18 8.99995 18C9.55224 18 9.99995 18.4477 9.99995 19C9.99995 19.5522 9.55224 20 8.99995 20C7.3611 20 5.72482 19.3622 4.7145 18.6133L4.70994 18.61L4.70995 18.61C4.23429 18.2532 3.88653 17.7847 3.63287 17.443C3.5868 17.3809 3.54384 17.3231 3.50377 17.2708C3.21745 16.8972 2.95413 16.6086 2.52974 16.3825C2.04232 16.1228 1.85771 15.5172 2.1174 15.0297Z"
                                                ></path>
                                            </svg>
                                        </a>
                                    )
                                }
                                {
                                    post.url && (
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            className="bg-gradient-to-r from-primary-500 to-primary-800 rounded-full w-10 h-10 flex items-center justify-center shadow hover:shadow-2xl transition-colors duration-300"
                                            title="Read More"
                                            rel="noopener noreferrer"
                                        >
                                            <svg className="fill-neutral-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.90909 5.45455C6.90909 4.65122 7.56031 4 8.36364 4H18.5455C19.3488 4 20 4.65122 20 5.45455V15.6364C20 16.4397 19.3488 17.0909 18.5455 17.0909C17.7421 17.0909 17.0909 16.4397 17.0909 15.6364V8.96613L6.48307 19.574C5.91503 20.142 4.99406 20.142 4.42603 19.574C3.85799 19.0059 3.85799 18.085 4.42603 17.5169L15.0339 6.90909H8.36364C7.56031 6.90909 6.90909 6.25787 6.90909 5.45455Z" />
                                            </svg>

                                        </a>
                                    )
                                }


                            </div>
                        </div>
                    </div>
                )}
            </article>
        </>
    );
};

export default Card;