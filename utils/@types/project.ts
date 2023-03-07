type Tag = {}

export type Project = {
	_id: string
	cover: { _type: string; asset: [Object] }
	dateWasCreated: string
	github: string
	isCompleted: boolean
	link: string
	title: string
	tags: Tag[]
}
