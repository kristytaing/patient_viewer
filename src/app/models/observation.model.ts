export class Observation {
	id: string;
	status: string;
	effectiveDateTime: string;
	relativeDateTime: string;
	category: Object;
	code: Object;
	valueQuantity: Object;
	valueCodeableConcept: Object;

	// This should be populated with the normal ranges, but isn't for whatever reason.
	referenceRange: Object;
	grouping: string;
}
