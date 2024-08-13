import { createFromIconfont } from "./Icon/createFromIconfont";

const IconFont = createFromIconfont(
	"//at.alicdn.com/t/c/font_4652778_1mpld7v1cph.js"
);

function App() {
	return (
		<div>
			<div style={{ padding: "50px" }}>
				<IconFont type="icon-cart-empty" size="40px"></IconFont>
				<IconFont
					type="icon-cart-empty-fill"
					fill="blue"
					size="40px"
				></IconFont>
			</div>
		</div>
	);
}

export default App;
