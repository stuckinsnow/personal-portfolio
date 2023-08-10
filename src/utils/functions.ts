import { useEffect, useState } from "react"

export const useDocumentTitle = (title: string): void => {
	useEffect(() => {
		document.title = title
	}, [title])
}

export const useToggleClass = (initialState: boolean = false): [boolean, () => void, boolean, (value: boolean) => void] => {
	const [isOpen, setIsOpen] = useState<boolean>(initialState)
	const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false)

	const toggleClass = () => {
		setIsOpen(!isOpen)
		if (isHamburgerClicked) {
			setIsHamburgerClicked(false)
		}
	}

	return [isOpen, toggleClass, isHamburgerClicked, setIsHamburgerClicked]
}

export const getUniqueTechnologies = (projectData: Array<{ technology: string[] }>): string[] => {
	const uniqueTechnologies = new Set<string>()

	projectData.forEach((project) => {
		project.technology.forEach((tech) => {
			uniqueTechnologies.add(tech)
		})
	})

	return Array.from(uniqueTechnologies)
}
