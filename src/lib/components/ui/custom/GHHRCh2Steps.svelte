<script>
	// Props for customization if needed
	export let width = '800';
	export let height = '220';
	export let boxColor = '#000000';
	export let textColor = '#FFFFFF';
	export let arrowColor = '#000000';

	// Step dimensions and positions
	const boxWidth = 220;
	const boxHeight = 180;
	const boxRadius = 20;
	const spacing = 50;

	// Calculate positions
	const step1X = 50;
	const step2X = step1X + boxWidth + spacing;
	const step3X = step2X + boxWidth + spacing;
	const stepY = 20;
</script>

<div class="workflow-container">
	<svg {width} {height} viewBox="0 0 {parseInt(width)} {parseInt(height)}">
		<!-- Step 1 -->
		<g class="step">
			<rect
				x={step1X}
				y={stepY}
				width={boxWidth}
				height={boxHeight}
				rx={boxRadius}
				ry={boxRadius}
				fill={boxColor}
			/>
			<text
				x={step1X + boxWidth / 2}
				y={stepY + 60}
				text-anchor="middle"
				fill={textColor}
				font-size="24"
				font-weight="bold"
			>
				Step 1
			</text>
			<text
				x={step1X + boxWidth / 2}
				y={stepY + 100}
				text-anchor="middle"
				fill={textColor}
				font-size="18"
			>
				Communicate
			</text>
			<text
				x={step1X + boxWidth / 2}
				y={stepY + 125}
				text-anchor="middle"
				fill={textColor}
				font-size="18"
			>
				Need for Technical
			</text>
			<text
				x={step1X + boxWidth / 2}
				y={stepY + 150}
				text-anchor="middle"
				fill={textColor}
				font-size="18"
			>
				Compliance
			</text>
		</g>

		<!-- Arrow from Step 1 to Step 2 -->
		<g class="arrow">
			<line
				x1={step1X + boxWidth}
				y1={stepY + boxHeight / 2}
				x2={step2X}
				y2={stepY + boxHeight / 2}
				stroke={arrowColor}
				stroke-width="2"
			/>
			<polygon
				points={`${step2X},${stepY + boxHeight / 2} ${step2X - 10},${stepY + boxHeight / 2 - 5} ${step2X - 10},${stepY + boxHeight / 2 + 5}`}
				fill={arrowColor}
			/>
		</g>

		<!-- Step 2 -->
		<g class="step">
			<rect
				x={step2X}
				y={stepY}
				width={boxWidth}
				height={boxHeight}
				rx={boxRadius}
				ry={boxRadius}
				fill={boxColor}
			/>
			<text
				x={step2X + boxWidth / 2}
				y={stepY + 60}
				text-anchor="middle"
				fill={textColor}
				font-size="24"
				font-weight="bold"
			>
				Step 2
			</text>
			<text
				x={step2X + boxWidth / 2}
				y={stepY + 100}
				text-anchor="middle"
				fill={textColor}
				font-size="18"
			>
				Test Data
			</text>
			<text
				x={step2X + boxWidth / 2}
				y={stepY + 125}
				text-anchor="middle"
				fill={textColor}
				font-size="18"
			>
				Submissions
			</text>
		</g>

		<!-- Arrow from Step 2 to Step 3 -->
		<g class="arrow">
			<line
				x1={step2X + boxWidth}
				y1={stepY + boxHeight / 2}
				x2={step3X}
				y2={stepY + boxHeight / 2}
				stroke={arrowColor}
				stroke-width="2"
			/>
			<polygon
				points={`${step3X},${stepY + boxHeight / 2} ${step3X - 10},${stepY + boxHeight / 2 - 5} ${step3X - 10},${stepY + boxHeight / 2 + 5}`}
				fill={arrowColor}
			/>
		</g>

		<!-- Step 3 -->
		<g class="step">
			<rect
				x={step3X}
				y={stepY}
				width={boxWidth}
				height={boxHeight}
				rx={boxRadius}
				ry={boxRadius}
				fill={boxColor}
			/>
			<text
				x={step3X + boxWidth / 2}
				y={stepY + 60}
				text-anchor="middle"
				fill={textColor}
				font-size="24"
				font-weight="bold"
			>
				Step 3
			</text>
			<text
				x={step3X + boxWidth / 2}
				y={stepY + 100}
				text-anchor="middle"
				fill={textColor}
				font-size="18"
			>
				Assess
			</text>
			<text
				x={step3X + boxWidth / 2}
				y={stepY + 125}
				text-anchor="middle"
				fill={textColor}
				font-size="18"
			>
				Production
			</text>
			<text
				x={step3X + boxWidth / 2}
				y={stepY + 150}
				text-anchor="middle"
				fill={textColor}
				font-size="18"
			>
				Readiness
			</text>
		</g>
	</svg>
</div>

<style>
	.workflow-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	svg {
		max-width: 100%;
		height: auto;
	}
</style>
