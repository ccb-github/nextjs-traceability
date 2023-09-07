import Link from "next/link"

export default function MainPanelNavItem({
  link,
  name,
  description,
}: {
  name: string
  link: string
  description: string
}) {
  return (
    <Link
      href={link}
      key={name}
      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
    >
      <div className="font-medium text-gray-200 group-hover:text-gray-50">
        {name}
      </div>
      {description != null ? (
        <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
          {description}
        </div>
      ) : null}
    </Link>
  )
}
