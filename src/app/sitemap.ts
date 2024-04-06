import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://khstore.sen-quiz.tech/",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://khstore.sen-quiz.tech/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
        {
			url: "https://khstore.sen-quiz.tech/policy",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://khstore.sen-quiz.tech/detail",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
	];
}
