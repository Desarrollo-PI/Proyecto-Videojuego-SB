import { Goblin } from "../../../globals/enemies/goblin/Goblin"
import { Skeleton } from "../../../globals/enemies/skeleton/Skeleton"
import { SkeletonMage } from "../../../globals/enemies/skeletonMage/SkeletonMage"
import { Troll } from "../../../globals/enemies/troll/Troll"
import { Witch } from "../../../globals/enemies/witch/Witch"


const Enemies = () => {
	return (
		<>
			{/* <Goblin position={[-2.5, 2.5, -18]} action={"Walk"} /> */}
			<Goblin position={[2.5, 2.5, -12]} action={"Idle"} />
			<Skeleton position={[0, 2.5, -75]} action={1} />
			<SkeletonMage position={[2.5, 5, -53]} action={1} />
			<Troll position={[0, 0, -100]} action={1} />
			<Witch position={[-2.5, 0, -34]} action={1} />
		</>
	)
}

export default Enemies
