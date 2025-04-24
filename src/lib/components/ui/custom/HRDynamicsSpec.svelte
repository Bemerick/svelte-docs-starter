<table>
	<thead>
		<tr>
			<th width="36">
				<p><strong>ICD Seq #</strong></p>
			</th>
			<th width="42">
				<p><strong>EHRI Ref #</strong></p>
			</th>
			<th width="126">
				<p><strong>Name</strong></p>
			</th>
			<th width="245">
				<p><strong>Definition</strong></p>
			</th>
			<th width="83">
				<p><strong>Data Concept</strong></p>
			</th>
			<th>
				width="93">
				<p><strong>Data Type</strong></p>
			</th>
			<th>
				width="60">
				<p><strong>Record Identifier</strong></p>
			</th>
			<th>
				width="47">
				<p><strong>Priority</strong></p>
			</th>
			<th width="228">
				<p><strong>Notes</strong></p>
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td width="36">
				<p>1</p>
			</td>
			<td width="42">
				<p>652</p>
			</td>
			<td width="126">
				<p>Social Security Number</p>
			</td>
			<td width="245">
				<p>The number assigned to an employee's social security account.</p>
			</td>
			<td width="83">
				<p>Employee ID</p>
			</td>
			<td width="93">
				<p>NUMBER(9)</p>
			</td>
			<td width="60">
				<p>Y / Dup</p>
			</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>2</p>
			</td>
			<td width="42">
				<p>74</p>
			</td>
			<td width="126">
				<p>Date of Birth</p>
			</td>
			<td width="245">
				<p>An employee's date of birth.</p>
			</td>
			<td width="83">
				<p>Employee ID</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">
				<p>Y / Dup</p>
			</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>Used in combination with SSN to uniquely identify an employee.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>3</p>
			</td>
			<td width="42">
				<p>999</p>
			</td>
			<td width="126">
				<p>EHRI Employee ID</p>
			</td>
			<td width="245">
				<p>
					The unique number that EHRI will assign to an employee to identify employee records within
					the EHRI.
				</p>
			</td>
			<td width="83">
				<p>Employee ID</p>
			</td>
			<td width="93">
				<p>NUMBER(20)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>4</p>
			</td>
			<td width="228">
				<p>
					This field is currently assigned and stored within EHRI and should be left blank by
					providers.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>4</p>
			</td>
			<td width="42">
				<p>17</p>
			</td>
			<td width="126">
				<p>Agency/Subelement</p>
			</td>
			<td width="245">
				<p>
					The agency and, where applicable, the administrative subdivision (i.e., subelement) which
					a person is employed.
				</p>
			</td>
			<td width="83">
				<p>Employee ID</p>
			</td>
			<td width="93">
				<p>VARCHAR(4)</p>
			</td>
			<td width="60">
				<p>Y / Dup</p>
			</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Agency/Subelement in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>5</p>
			</td>
			<td width="42">
				<p>513</p>
			</td>
			<td width="126">
				<p>Effective Date of Personnel Action</p>
			</td>
			<td width="245">
				<p>The effective date of a personnel action.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">
				<p>Y / Dup</p>
			</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>6</p>
			</td>
			<td width="42">
				<p>436</p>
			</td>
			<td width="126">
				<p>Nature of Action (1)</p>
			</td>
			<td width="245">
				<p>The specific personnel action used to create or change a civilian personnel record.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(3)</p>
			</td>
			<td width="60">
				<p>Y / Dup</p>
			</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Nature of Action (1) in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>7</p>
			</td>
			<td width="42">
				<p>381</p>
			</td>
			<td width="126">
				<p>Legal Authority (1)</p>
			</td>
			<td width="245">
				<p>
					The law, executive order, rule, regulation, or other basis that authorizes the appointing
					officer to effect a personnel action on an employee.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(3)</p>
			</td>
			<td width="60">
				<p>Dup</p>
			</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Legal Authority (1) in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>8</p>
			</td>
			<td width="42">
				<p>381</p>
			</td>
			<td width="126">
				<p>Legal Authority (2)</p>
			</td>
			<td width="245">
				<p>
					The law, executive order, rule, regulation, or other basis that, in addition to LEGAL
					AUTHORITY (1), authorizes the appointing officer to effect a personnel action on an
					employee.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(3)</p>
			</td>
			<td width="60">
				<p>Dup</p>
			</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Legal Authority (2) in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>9</p>
			</td>
			<td width="42">
				<p>436</p>
			</td>
			<td width="126">
				<p>Nature of Action (2)</p>
			</td>
			<td width="245">
				<p>The specific personnel action used to create or change a civilian personnel record.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(3)</p>
			</td>
			<td width="60">
				<p>Dup</p>
			</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Nature of Action (2) in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>10</p>
			</td>
			<td width="42">
				<p>1016</p>
			</td>
			<td width="126">
				<p>Nature of Action Being Corrected</p>
			</td>
			<td width="245">
				<p>
					The nature of action, previously submitted to the Enterprise Human Resources Integration,
					that is being corrected.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(3)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>See Nature of Action Being Corrected in the Guide to Personnel Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>11</p>
			</td>
			<td width="42">
				<p>1009</p>
			</td>
			<td width="126">
				<p>Effective Date of Personnel Action Being Corrected</p>
			</td>
			<td width="245">
				<p>
					The EFFECTIVE DATE OF PERSONNEL ACTION, previously submitted to the Central Personnel Data
					File, that is being corrected.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					See Effective Date of Personnel Action Being Corrected in the Guide to Data Standards.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>12</p>
			</td>
			<td width="42">
				<p>956</p>
			</td>
			<td width="126">
				<p>Current Appointment Authority (1)</p>
			</td>
			<td width="245">
				<p>
					The law, executive order, rule, regulation, or other basis that authorizes an employee's
					most recent conversion or accession action.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(3)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Current Appointment Authority (1) in the Guide to Data
					Standards.
				</p>
				<p>
					Current Appointment Authority (1) must be reported for all employees. The current
					appointment authority is the legal authority on the employee's most recent accession or
					conversion, excluding any mass transfers. Current appointment authority (1) may be
					reported as "ZZZ" for competitive service employees whose Service Computation Date for
					Leave is earlier than January 1982. Code "ZZZ" indicates the employee was appointed before
					agencies were required to report current appointment authority for competitive service
					employees.
				</p>
				<p>
					On accession and conversion actions, the current appointment authorities must match the
					legal authorities. The only exception is Mass Transfer.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>13</p>
			</td>
			<td width="42">
				<p>957</p>
			</td>
			<td width="126">
				<p>Current Appointment Authority (2)</p>
			</td>
			<td width="245">
				<p>
					The law, executive order, rule, regulation, or other basis that, in addition to CURRENT
					APPOINTMENT AUTHORITY (1), authorizes an employee's most recent conversion or accession
					action.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(3)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Current Appointment Authority (2) in the Guide to Data
					Standards.
				</p>
				<p>
					Current Appointment Authority (2) is blank unless there were two legal authorities on the
					employee's most recent accession or conversion action. Current appointment authority (2)
					is always blank if current appointment authority (1) is "ZZZ."
				</p>
				<p>
					On accession and conversion actions, the current appointment authorities must match the
					legal authorities. The only exception is Mass Transfer.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>14</p>
			</td>
			<td width="42">
				<p>37</p>
			</td>
			<td width="126">
				<p>Appointment Not to Exceed NTE Date</p>
			</td>
			<td width="245">
				<p>End date of the employee's temporary not-to-exceed appointment.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>15</p>
			</td>
			<td width="42">
				<p>516</p>
			</td>
			<td width="126">
				<p>Personnel Office Identifier</p>
			</td>
			<td width="245">
				<p>
					The identification of the Federal civilian personnel office authorized to appoint and
					separate an employee, and to the extent such functions have been delegated, prepare
					personnel actions, maintain official personnel records, and administer programs for staff
					compensation, training and development, benefits and awards, and employee and labor
					relations.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Personnel Office Identifier in the Guide to Data Standards.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>16</p>
			</td>
			<td width="42">
				<p>480</p>
			</td>
			<td width="126">
				<p>Organizational Component</p>
			</td>
			<td width="245">
				<p>The lowest administrative subdivision of an agency to which an employee is assigned.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(18)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Organizational Component in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>17</p>
			</td>
			<td width="42">
				<p>776</p>
			</td>
			<td width="126">
				<p>Sex</p>
			</td>
			<td width="245">
				<p>An employee's sex.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Sex in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>18</p>
			</td>
			<td width="42">
				<p>556</p>
			</td>
			<td width="126">
				<p>Race or National Origin Code</p>
			</td>
			<td width="245">
				<p>An employee's race or national origin.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Race or National Origin Code in the Guide to Data Standards.
					This data element is only populated for employees whose accession occurred prior to July
					1, 2006. For employees whose accession occurs on or after January 1, 2006, ethnicity and
					race identification code should be populated.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>19</p>
			</td>
			<td width="42">
				<p>110</p>
			</td>
			<td width="126">
				<p>Disability</p>
			</td>
			<td width="245">
				<p>
					The physical or mental impairment which substantially limits one or more major life
					activities, the record of such impairment; or the perception of such impairment by others.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Disability in the Guide to Data Standards. Note that
					Disability Codes are applicable to and required for accessions occurring on or after
					September 26, 2010. Beginning September 26, 2010, new hires will complete the new SF 256.
					Agencies may, but are not required to, resurvey their current employees with the new SF
					256. For accessions occurring prior to September 26, 2010, the Handicap data code may
					continue to be used.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>20</p>
			</td>
			<td width="42">
				<p>1015</p>
			</td>
			<td width="126">
				<p>Social Security Number Being Corrected</p>
			</td>
			<td width="245">
				<p>
					The SOCIAL SECURITY NUMBER, previously submitted to the Enterprise Human Resources
					Integration (EHRI), that is being corrected.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(9)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>See Social Security Number Being Corrected in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>21</p>
			</td>
			<td width="42">
				<p>759</p>
			</td>
			<td width="126">
				<p>Veterans Preference</p>
			</td>
			<td width="245">
				<p>
					An employee's category of entitlement to preference at time of appointment in the Federal
					service based on active military service that terminated honorably.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Veterans Preference in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>22</p>
			</td>
			<td width="42">
				<p>682</p>
			</td>
			<td width="126">
				<p>Tenure</p>
			</td>
			<td width="245">
				<p>
					For purposes of reduction in force, the retention group in which an employee is placed
					based on the employee's type of appointment.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Tenure in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>23</p>
			</td>
			<td width="42">
				<p>1022</p>
			</td>
			<td width="126">
				<p>Agency Use Code Field</p>
			</td>
			<td width="245">
				<p>Agency specific code data.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(10)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>24</p>
			</td>
			<td width="42">
				<p>1023</p>
			</td>
			<td width="126">
				<p>Agency Use Text Field</p>
			</td>
			<td width="245">
				<p>Agency specific text description related to Agency Used Code Field.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>25</p>
			</td>
			<td width="42">
				<p>1024</p>
			</td>
			<td width="126">
				<p>Veterans Preference for RIF Indicator</p>
			</td>
			<td width="245">
				<p>Indicates whether employee has preference for reduction in force purposes.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Veterans Preference for RIF Indicator in the Guide to Data
					Standards.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>26</p>
			</td>
			<td width="42">
				<p>184</p>
			</td>
			<td width="126">
				<p>Federal Employees' Group Life Insurance</p>
			</td>
			<td width="245">
				<p>
					An employee's coverage or noncoverage under the Federal Employees' Group Life Insurance
					(FEGLI) Program.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Federal Employees' Group Life Insurance in The Guide to Data
					Standards.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>27</p>
			</td>
			<td width="42">
				<p>29</p>
			</td>
			<td width="126">
				<p>Annuitant Indicator</p>
			</td>
			<td width="245">
				<p>The status of an annuitant appointed to a position in the Federal civilian service.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Annuitant Indicator in the Guide to Personnel Data Standards.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>28</p>
			</td>
			<td width="42">
				<p>592</p>
			</td>
			<td width="126">
				<p>Retirement Plan</p>
			</td>
			<td width="245">
				<p>
					The civilian retirement system(s) to which deductions from an employee's pay are credited.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Retirement Plan in The Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>29</p>
			</td>
			<td width="42">
				<p>604</p>
			</td>
			<td width="126">
				<p>Service Computation Date (Leave)</p>
			</td>
			<td width="245">
				<p>An employee's service computation date for leave accrual purposes.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>30</p>
			</td>
			<td width="42">
				<p>604</p>
			</td>
			<td width="126">
				<p>Service Computation Date (Retirement)</p>
			</td>
			<td width="245">
				<p>An employee's service computation date for retirement purposes.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>31</p>
			</td>
			<td width="42">
				<p>604</p>
			</td>
			<td width="126">
				<p>Service Computation Date (RIF)</p>
			</td>
			<td width="245">
				<p>An employee's service computation date for reduction-in-force purposes.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>32</p>
			</td>
			<td width="42">
				<p>604</p>
			</td>
			<td width="126">
				<p>SES Service Computation Date</p>
			</td>
			<td width="245">
				<p>Senior Executive Service (SES) Service computation date (SCD) of an employee.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>3</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>33</p>
			</td>
			<td width="42">
				<p>604</p>
			</td>
			<td width="126">
				<p>Special Retirement Service Computation Date</p>
			</td>
			<td width="245">
				<p>Special Retirement Service computation date (SCD) of an employee.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>3</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>34</p>
			</td>
			<td width="42">
				<p>604</p>
			</td>
			<td width="126">
				<p>Thrift Savings Plan Service Computation Date</p>
			</td>
			<td width="245">
				<p>Thrift Savings Plan (TSP) Service computation date (SCD) of an employee.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>35</p>
			</td>
			<td width="42">
				<p>521</p>
			</td>
			<td width="126">
				<p>Position Occupied</p>
			</td>
			<td width="245">
				<p>
					An employee's position in the Competitive Service, Excepted Service, or the Senior
					Executive Service.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Position Occupied in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>36</p>
			</td>
			<td width="42">
				<p>286</p>
			</td>
			<td width="126">
				<p>FLSA Category</p>
			</td>
			<td width="245">
				<p>
					The status of a Federal civilian employee under the authority of Section 13 of the Fair
					Labor Standards Act (29 U.S.C. 213), as amended.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference FLSA Category in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>37</p>
			</td>
			<td width="42">
				<p>38</p>
			</td>
			<td width="126">
				<p>Appropriation Code</p>
			</td>
			<td width="245">
				<p>Appropriation code associated with a position.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">
				<p>Valid values are agency specific.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>38</p>
			</td>
			<td width="42">
				<p>50</p>
			</td>
			<td width="126">
				<p>Bargaining Unit</p>
			</td>
			<td width="245">
				<p>An employee's bargaining unit status.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Bargaining Unit in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>39</p>
			</td>
			<td width="42">
				<p>676</p>
			</td>
			<td width="126">
				<p>Supervisory Status</p>
			</td>
			<td width="245">
				<p>
					The nature of managerial, supervisory, or non-supervisory responsibility assigned to an
					employee's position.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Supervisory Status in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>40</p>
			</td>
			<td width="42">
				<p>1017</p>
			</td>
			<td width="126">
				<p>Creditable Military Service Years</p>
			</td>
			<td width="245">
				<p>
					The number of year(s) of military service that are creditable for Annual Leave (AL)
					accrual purposes.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>41</p>
			</td>
			<td width="42">
				<p>95</p>
			</td>
			<td width="126">
				<p>Creditable Military Service Months</p>
			</td>
			<td width="245">
				<p>
					The number of month(s) of military service that are creditable for Annual Leave (AL)
					accrual purposes.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					Valid values include 00 through 11; increment Creditable Military Service Years field as
					needed.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>42</p>
			</td>
			<td width="42">
				<p>1018</p>
			</td>
			<td width="126">
				<p>Creditable Military Service Days</p>
			</td>
			<td width="245">
				<p>
					The number of days of military service in addition to the Creditable Military Service
					Years and Months that are creditable for Annual Leave (AL) accrual purposes.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>3</p>
			</td>
			<td width="228">
				<p>
					Valid values include 00 through 30; increment Creditable Military Service Months field as
					needed.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>43</p>
			</td>
			<td width="42">
				<p>1019</p>
			</td>
			<td width="126">
				<p>Frozen Service Years</p>
			</td>
			<td width="245">
				<p>
					The total years of civilian and military service that is creditable in a Civil Service
					Retirement System (CSRS) component of a FERS employee (RETIREMENT PLAN codes K, L, M, and
					N), or, in the case of a CSRS Offset employee (RETIREMENT PLAN codes C and E), the service
					that would be included in a CSRS component if the employee ever becomes covered by FERS.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>44</p>
			</td>
			<td width="42">
				<p>293</p>
			</td>
			<td width="126">
				<p>Frozen Service Months</p>
			</td>
			<td width="245">
				<p>
					The total months of civilian and military service that is creditable in a Civil Service
					Retirement System (CSRS) component of a FERS employee (RETIREMENT PLAN codes K, L, M, and
					N), or, in the case of a CSRS Offset employee (RETIREMENT PLAN codes C and E), the service
					that would be included in a CSRS component if the employee ever becomes covered by FERS.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>Valid values include 00 through 11; increment Frozen Service Years field as needed.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>45</p>
			</td>
			<td width="42">
				<p>1020</p>
			</td>
			<td width="126">
				<p>Frozen Service Days</p>
			</td>
			<td width="245">
				<p>
					The total days of civilian and military service that is creditable in a Civil Service
					Retirement System (CSRS) component of a FERS employee (RETIREMENT PLAN codes K, L, M, and
					N), or, in the case of a CSRS Offset employee (RETIREMENT PLAN codes C and E), the service
					that would be included in a CSRS component if the employee ever becomes covered by FERS.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>3</p>
			</td>
			<td width="228">
				<p>Valid values include 00 through 30; increment Frozen Service Years field as needed.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>46</p>
			</td>
			<td width="42">
				<p>591</p>
			</td>
			<td width="126">
				<p>Retirement Previous Coverage Indicator</p>
			</td>
			<td width="245">
				<p>
					Indicates if an employee has, at the time of most recent appointment to the Federal
					service, previously been covered by the Civil Service Retirement System or the Federal
					Employees' Retirement System.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference RETIREMENT PREVIOUS COVERAGE INDICATOR in the Guide to Data
					Standards.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>47</p>
			</td>
			<td width="42">
				<p>765</p>
			</td>
			<td width="126">
				<p>Veterans Status</p>
			</td>
			<td width="245">
				<p>
					The indicator of whether an employee is a veteran as defined by 38 U.S.C. 101 (i.e., a
					person who served in the active uniformed military service of the United States and who
					was discharged or released from service under conditions other than dishonorable).
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Veterans Status in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>48</p>
			</td>
			<td width="42">
				<p>117</p>
			</td>
			<td width="126">
				<p>Education Level</p>
			</td>
			<td width="245">
				<p>The extent of an employee's educational attainment from an accredited institution.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Education Level in the Guide to Data Standards.</p>
				<p>
					Education Level must be reported for all permanent employees (tenure groups 1 and 2) and
					for all Senior Executive Service employees. It may be reported or left blank for temporary
					employees.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>49</p>
			</td>
			<td width="42">
				<p>311</p>
			</td>
			<td width="126">
				<p>Instructional Program</p>
			</td>
			<td width="245">
				<p>An employee's major field of study.</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(6)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Instructional Program in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>50</p>
			</td>
			<td width="42">
				<p>101</p>
			</td>
			<td width="126">
				<p>Year Degree or Certificate Attained</p>
			</td>
			<td width="245">
				<p>
					The calendar year during which the employee received the degree or certificate shown for
					EDUCATION LEVEL.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					Instructional Program and Year Degree or Certificate Attained must be reported for all
					employees whose reported education level is:
				</p>
				<p>
					Bachelor's degree or higher; OR Associate's degree if the employee was hired on or after
					October 1,1993; OR Completed terminal occupational program if the employee was hired on or
					after October 1, 1993.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>51</p>
			</td>
			<td width="42">
				<p>559</p>
			</td>
			<td width="126">
				<p>Rating of Record (Level)</p>
			</td>
			<td width="245">
				<p>
					The summary level assigned to a rating of record. Rating of record is the performance
					rating prepared at the end of an appraisal period for performance over the entire period.
					Refer to 5 CFR 430.203 for the definition of rating of record and 5 CFR 430.303 for the
					definition of annual summary rating and to 5 CFR 430.208 and 5 CFR 430.304 for definitions
					of summary levels.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Performance Appraisal</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Rating of Record (Level) in the Guide to Data Standards.</p>
				<p>
					Report the summary level for the employee's last rating of record unless the employee: (1)
					Moved into the Senior Executive Service since his or her last rating. For Senior Executive
					Service employees, report only the ratings received under the Senior Executive Service
					appraisal system. If the employee has not yet received a rating under the Senior Executive
					Service appraisal system, report code "X." (2) Moved to a position excluded from the
					performance appraisal system since his or her last rating. In this case, Rating of Record
					(Level) must be blank (but see Rating of Record (Pattern) below).
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>52</p>
			</td>
			<td width="42">
				<p>561</p>
			</td>
			<td width="126">
				<p>Rating of Record (Pattern)</p>
			</td>
			<td width="245">
				<p>
					The specific summary levels which can be assigned to a rating of record under an appraisal
					program. The patterns of summary levels which shall be used are those defined in 5 CFR
					430.208(d) and Z for employees not covered by an appraisal program.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Performance Appraisal</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Rating of Record (Pattern) in the Guide to Data Standards.
				</p>
				<p>
					Rating of Record (Pattern). Report the code for the pattern associated with the Rating of
					Record (Level). If the employee has not yet received a rating, report a blank or the
					appropriate code for the pattern under which the employee will be rated. If the employee
					is in a position excluded from the performance appraisal system, report code
					&ldquo;Z&rdquo;.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>53</p>
			</td>
			<td width="42">
				<p>565</p>
			</td>
			<td width="126">
				<p>Rating of Record Period Start Date</p>
			</td>
			<td width="245">
				<p>
					Start date of the appraisal period for which the performance appraisal rating of record
					(level) was issued. Refer to 5 CFR 430.203 and 5 CFR 430.303.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Performance Appraisal</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">
				<p>
					Rating of Record (Period). Report the period associated with the Rating of Record (Level).
					If the employee has not yet received a rating, Rating of Record (Period) may be blank. If
					the employee is in a position excluded from the performance appraisal system, report a
					blank.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>54</p>
			</td>
			<td width="42">
				<p>563</p>
			</td>
			<td width="126">
				<p>Rating of Record Period End Date</p>
			</td>
			<td width="245">
				<p>
					Ending date of the appraisal period for which the performance appraisal rating of record
					(level) was issued. Refer to 5 CFR 430.203 and 5 CFR 430.303.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Performance Appraisal</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					Rating of Record (Period). Report the period associated with the Rating of Record (Level).
					If the employee has not yet received a rating, Rating of Record (Period) may be blank. If
					the employee is in a position excluded from the performance appraisal system, report a
					blank.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>55</p>
			</td>
			<td width="42">
				<p>1011</p>
			</td>
			<td width="126">
				<p>Prior Family Name</p>
			</td>
			<td width="245">
				<p>Employee's Prior Family Name value.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>56</p>
			</td>
			<td width="42">
				<p>1012</p>
			</td>
			<td width="126">
				<p>Prior Given Name</p>
			</td>
			<td width="245">
				<p>Employee's Prior Given Name value.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>57</p>
			</td>
			<td width="42">
				<p>1013</p>
			</td>
			<td width="126">
				<p>Prior Middle Name</p>
			</td>
			<td width="245">
				<p>Employee's Prior Middle Name value.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>58</p>
			</td>
			<td width="42">
				<p>1014</p>
			</td>
			<td width="126">
				<p>Prior Name Suffix</p>
			</td>
			<td width="245">
				<p>Employee's Prior Name Suffix value.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>59</p>
			</td>
			<td width="42">
				<p>1027</p>
			</td>
			<td width="126">
				<p>Prior Position Title</p>
			</td>
			<td width="245">
				<p>
					Title of the employee's prior position as it is reflected on his/her position description.
					When action grants or continues entitlement to grade retention under 5 U.S.C. 5362, enter
					the title of position employee actually occupies, not of the position whose grade the
					employee is retaining for pay and benefit purposes.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(60)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>60</p>
			</td>
			<td width="42">
				<p>1029</p>
			</td>
			<td width="126">
				<p>Prior Position Number</p>
			</td>
			<td width="245">
				<p>
					Alpha-numeric code associated with the employee's prior position title as shown on the
					employee's prior position description. When action grants or continues entitlement to
					grade retention under 5 U.S.C. 5362, enter the position number of position employee
					actually occupies, not of the position whose grade the employee is retaining for pay and
					benefit purposes.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>61</p>
			</td>
			<td width="42">
				<p>1026</p>
			</td>
			<td width="126">
				<p>Prior Position Organization</p>
			</td>
			<td width="245">
				<p>
					The lowest subdivision of an organization to which an employee is assigned as indicated on
					his/her prior position description.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(500)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>See Prior Position Organization in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>62</p>
			</td>
			<td width="42">
				<p>971</p>
			</td>
			<td width="126">
				<p>Prior Pay Plan</p>
			</td>
			<td width="245">
				<p>An employee's prior PAY PLAN.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Prior Pay Plan in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>63</p>
			</td>
			<td width="42">
				<p>969</p>
			</td>
			<td width="126">
				<p>Prior Occupation</p>
			</td>
			<td width="245">
				<p>An employee's prior OCCUPATION.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Prior Occupation in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>64</p>
			</td>
			<td width="42">
				<p>965</p>
			</td>
			<td width="126">
				<p>Prior Grade, Level, Class, Rank, or Pay Band Code</p>
			</td>
			<td width="245">
				<p>An employee's prior GRADE, LEVEL, CLASS, RANK, OR PAY BAND.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Prior Grade, Level, Class, Rank, or Pay Band Code in the Guide
					to Data Standards.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>65</p>
			</td>
			<td width="42">
				<p>973</p>
			</td>
			<td width="126">
				<p>Prior Step or Rate</p>
			</td>
			<td width="245">
				<p>An employee&rsquo;s prior STEP OR RATE.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Prior Step or Rate in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>66</p>
			</td>
			<td width="42">
				<p>970</p>
			</td>
			<td width="126">
				<p>Prior Pay Basis</p>
			</td>
			<td width="245">
				<p>An employee's prior PAY BASIS.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Prior Pay Basis in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>67</p>
			</td>
			<td width="42">
				<p>1010</p>
			</td>
			<td width="126">
				<p>Prior Total Salary Rate</p>
			</td>
			<td width="245">
				<p>
					Sum of all prior fixed pay amounts paid on a regular and recurring basis (i.e., each pay
					period), subject to applicable pay caps. This includes prior adjusted basic pay (sum of
					prior basic pay + any applicable prior basic pay supplement) and any prior fixed-amount
					allowances and differentials that are paid on a regular and recurring basis (e.g., post
					differentials and cost-of-living allowances). Also includes prior standby duty premium
					pay, prior administratively uncontrollable overtime pay, prior law enforcement
					availability pay, and prior regular overtime pay for firefighters paid under 5 U.S.C.
					5545b. Express amount using same prior pay basis as used for prior basic pay rate. Prior
					Total Salary Rate is not limited to retirement-creditable basic pay.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>68</p>
			</td>
			<td width="42">
				<p>963</p>
			</td>
			<td width="126">
				<p>Prior Basic Pay</p>
			</td>
			<td width="245">
				<p>An employee's prior BASIC PAY.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>69</p>
			</td>
			<td width="42">
				<p>962</p>
			</td>
			<td width="126">
				<p>Prior Adjusted Basic Pay Rate</p>
			</td>
			<td width="245">
				<p>An employee's prior ADJUSTED BASIC PAY.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>70</p>
			</td>
			<td width="42">
				<p>967</p>
			</td>
			<td width="126">
				<p>Prior Standard Basic Pay Supplement</p>
			</td>
			<td width="245">
				<p>
					Amount of prior standard basic pay supplement that is designed to be the sole or primary
					prior basic pay supplement for employees within a pay system or subsystem. The supplement
					is a regular, fixed payment for nonovertime hours that is creditable as prior basic pay
					for retirement purposes, excluding any type of premium payment or differential that is
					triggered for working certain hours of the day or week or for performing certain types of
					work. Includes GS prior locality pay, prior title 38 market pay, or similar prior
					supplements. Excludes prior GS special rate supplement and similar prior secondary
					supplements. Express amount using same prior pay basis as used for prior basic pay rate.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>71</p>
			</td>
			<td width="42">
				<p>974</p>
			</td>
			<td width="126">
				<p>Prior Work Schedule</p>
			</td>
			<td width="245">
				<p>An employee's prior WORK SCHEDULE.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Prior Work Schedule in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>72</p>
			</td>
			<td width="42">
				<p>972</p>
			</td>
			<td width="126">
				<p>Prior Pay Rate Determinant</p>
			</td>
			<td width="245">
				<p>An employee's prior PAY RATE DETERMINANT.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Prior Pay Rate Determinant in the Guide to Data Standards.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>73</p>
			</td>
			<td width="42">
				<p>964</p>
			</td>
			<td width="126">
				<p>Prior Duty Station</p>
			</td>
			<td width="245">
				<p>An employee's prior DUTY STATION.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(9)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Prior Duty Station in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>74</p>
			</td>
			<td width="42">
				<p>430</p>
			</td>
			<td width="126">
				<p>Name Family</p>
			</td>
			<td width="245">
				<p>
					Non-chosen/inherited/married name by which a person is known or designated on all official
					transactions.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>75</p>
			</td>
			<td width="42">
				<p>431</p>
			</td>
			<td width="126">
				<p>Name Given</p>
			</td>
			<td width="245">
				<p>
					Given/chosen/often first name by which a person is known or designated on all official
					transactions.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>76</p>
			</td>
			<td width="42">
				<p>432</p>
			</td>
			<td width="126">
				<p>Name Middle</p>
			</td>
			<td width="245">
				<p>
					Middle name, or initial, by which a person is known or designated on all official
					transactions.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>77</p>
			</td>
			<td width="42">
				<p>433</p>
			</td>
			<td width="126">
				<p>Name Suffix</p>
			</td>
			<td width="245">
				<p>Suffix to a full name on all official transactions.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>78</p>
			</td>
			<td width="42">
				<p>526</p>
			</td>
			<td width="126">
				<p>Position Title Description</p>
			</td>
			<td width="245">
				<p>Official classification title description of the position of the employee.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(60)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					When action grants or continues entitlement to grade retention under 5 U.S.C. 5362, enter
					the title of position employee actually occupies, not of the position whose grade the
					employee is retaining for pay and benefit purposes.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>79</p>
			</td>
			<td width="42">
				<p>1028</p>
			</td>
			<td width="126">
				<p>Position Number</p>
			</td>
			<td width="245">
				<p>
					Alpha-numeric code associated with the employee's new position title as shown on the
					employee's position description. When action grants or continues entitlement to grade
					retention under 5 U.S.C. 5362, enter the position number of position employee actually
					occupies, not of the position whose grade the employee is retaining for pay and benefit
					purposes.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>80</p>
			</td>
			<td width="42">
				<p>1025</p>
			</td>
			<td width="126">
				<p>Position Organization</p>
			</td>
			<td width="245">
				<p>
					The lowest subdivision of an organization to which an employee is assigned as indicated on
					his/her position description.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(500)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>81</p>
			</td>
			<td width="42">
				<p>502</p>
			</td>
			<td width="126">
				<p>Pay Plan</p>
			</td>
			<td width="245">
				<p>
					A particular table or array of pay rates prescribed by law or other authoritative source
					that establishes the basic pay rates for certain employees.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Pay Plan in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>82</p>
			</td>
			<td width="42">
				<p>465</p>
			</td>
			<td width="126">
				<p>Occupation</p>
			</td>
			<td width="245">
				<p>An employee's occupational series.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Occupation in The Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>83</p>
			</td>
			<td width="42">
				<p>298</p>
			</td>
			<td width="126">
				<p>Grade, Level, Class, Rank, or Pay Band Code</p>
			</td>
			<td width="245">
				<p>
					An indicator of hierarchical relationships among positions covered by the same pay plan or
					system.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Grade, Level, Class, Rank, or Pay Band Code in the GDS.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>84</p>
			</td>
			<td width="42">
				<p>670</p>
			</td>
			<td width="126">
				<p>Step or Rate</p>
			</td>
			<td width="245">
				<p>An indicator of a specific salary within a grade, level, class, rate, or pay band.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Step or Rate in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>85</p>
			</td>
			<td width="42">
				<p>497</p>
			</td>
			<td width="126">
				<p>Pay Basis</p>
			</td>
			<td width="245">
				<p>
					The principal condition in terms of time, production, or other criteria that, along with
					salary rate, determines the compensation paid to an employee.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Pay Basis in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>86</p>
			</td>
			<td width="42">
				<p>961</p>
			</td>
			<td width="126">
				<p>Total Salary Rate</p>
			</td>
			<td width="245">
				<p>
					Sum of all fixed pay amounts paid on a regular and recurring basis (i.e., each pay
					period), subject to applicable pay caps. This includes adjusted basic pay (sum of basic
					pay + any applicable basic pay supplement) and any fixed-amount allowances and
					differentials that are paid on a regular and recurring basis (e.g., post differentials and
					cost-of-living allowances). Also includes standby duty premium pay, administratively
					uncontrollable overtime pay, law enforcement availability pay, and regular overtime pay
					for firefighters paid under 5 U.S.C. 5545b. Express amount using same pay basis as used
					for basic pay rate. Total Salary Rate is not limited to retirement-creditable basic pay.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>87</p>
			</td>
			<td width="42">
				<p>52</p>
			</td>
			<td width="126">
				<p>Basic Pay</p>
			</td>
			<td width="245">
				<p>
					The employee&rsquo;s rate of basic pay. Exclude supplements, adjustments, allowances,
					differentials, incentives, or other similar additional payments.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					Basic pay must be reported at a rate consistent with pay basis. Amounts should be right
					justified with leading zeros. Report the nearest whole dollar amount when the pay basis is
					annual, school year, monthly, or biweekly. Report all zeros when the pay basis is without
					compensation. For all other pay bases, report the amount in dollars and cents with no
					decimal. For employees on grade retention, show the basic pay and pay basis in terms of
					the system under which the employee is being paid, i.e., the retained pay plan.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>88</p>
			</td>
			<td width="42">
				<p>6</p>
			</td>
			<td width="126">
				<p>Adjusted Basic Pay</p>
			</td>
			<td width="245">
				<p>
					The sum of an employee's rate of basic pay and any basic pay supplement (standard OR
					special), after applying any applicable pay cap. A basic pay supplement is defined as a
					regular, fixed supplemental payment (paid in conjunction with base pay) for nonovertime
					hours of work that is creditable as basic pay for retirement purposes, excluding any type
					of premium payment or differential that is triggered for working certain hours of the day
					or week or for being subjected to certain working conditions.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>89</p>
			</td>
			<td width="42">
				<p>392</p>
			</td>
			<td width="126">
				<p>Standard Basic Pay Supplement</p>
			</td>
			<td width="245">
				<p>
					Amount of standard basic pay supplement that is designed to be the sole or primary basic
					pay supplement for employees within a pay system or subsystem. The supplement is a
					regular, fixed payment for nonovertime hours that is creditable as basic pay for
					retirement purposes, excluding any type of premium payment or differential that is
					triggered for working certain hours of the day or week or for performing certain types of
					work. Includes GS locality pay, title 38 market pay, or similar supplements. Excludes GS
					special rate supplement and similar secondary supplements. Express amount using same pay
					basis as used for basic pay rate.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>90</p>
			</td>
			<td width="42">
				<p>678</p>
			</td>
			<td width="126">
				<p>Supervisor Differential</p>
			</td>
			<td width="245">
				<p>
					The annual total dollar amount paid, over and above BASIC PAY, to a General Schedule
					supervisor who otherwise would be paid less than one or more of the civilian employees
					supervised.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>91</p>
			</td>
			<td width="42">
				<p>1007</p>
			</td>
			<td width="126">
				<p>Retention Allowance</p>
			</td>
			<td width="245">
				<p>
					The annual total dollar amount (up to 25 percent of basic pay) paid to an essential
					employee with unusually high qualifications or special skills in those cases where the
					agency determines that the employee would be likely to leave Federal employment if no
					allowance were paid. Note that, under Section 301 (effective May 1, 2005) of the Federal
					Workforce Flexibility Act of 2004 (Public Law 108-411, dated October 30, 2004), retention
					allowance (used with nature of action code 810) has been replaced by retention incentive
					(used with nature of action code 827). An employee receiving an allowance under the former
					retention payment program is entitled to continue receiving the allowance until the
					allowance is terminated, but not later than April 30, 2006. Retention allowance should
					only be used for such an employee.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>4</p>
			</td>
			<td width="228">
				<p>
					Effective May 1, 2006 this element is no longer in effect. Analysis of this data will take
					place against the payroll data.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>92</p>
			</td>
			<td width="42">
				<p>40</p>
			</td>
			<td width="126">
				<p>Award Dollars</p>
			</td>
			<td width="245">
				<p>The gross dollar amount of an award.</p>
			</td>
			<td width="83">
				<p>Personnel Action Award</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					Award Dollars must be reported in whole dollars. If an award is under-reported, do not
					submit a second action with the increment. Submit a correction with the total corrected
					award amount.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>93</p>
			</td>
			<td width="42">
				<p>691</p>
			</td>
			<td width="126">
				<p>Award Hours</p>
			</td>
			<td width="245">
				<p>
					The number of hours given as a time-off award. Only include if the personnel action is an
					award action for time off.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Award</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>94</p>
			</td>
			<td width="42">
				<p>976</p>
			</td>
			<td width="126">
				<p>Award Percent</p>
			</td>
			<td width="245">
				<p>
					Percent of salary received as an award. Only include if the personnel action is an award
					action based on a percentage of the employee's salary.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Award</p>
			</td>
			<td width="93">
				<p>DECIMAL(6,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>95</p>
			</td>
			<td width="42">
				<p>767</p>
			</td>
			<td width="126">
				<p>Work Schedule</p>
			</td>
			<td width="245">
				<p>The time basis on which an employee is scheduled to work.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Work Schedule in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>96</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Regular and Recurring Tour of Duty</p>
			</td>
			<td width="245">
				<p>
					Total hours the employee is scheduled to work during the bi-weekly pay period as part of
					the regular and recurring tour of duty. Should be populated for all non-intermittent
					employees. Part time employees will have less than 80 hours, most full time employees will
					have 80 hours, and some employees may have over 80 hours in this field.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>97</p>
			</td>
			<td width="42">
				<p>504</p>
			</td>
			<td width="126">
				<p>Pay Rate Determinant</p>
			</td>
			<td width="245">
				<p>
					A designation of any special factors that help determine an employee's rate of basic pay
					or adjusted basic pay.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Pay Rate Determinant in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>98</p>
			</td>
			<td width="42">
				<p>114</p>
			</td>
			<td width="126">
				<p>Duty Station</p>
			</td>
			<td width="245">
				<p>The location of an employee's official worksite.</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(9)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Duty Station in the Guide to Data Standards.</p>
				<p>
					Duty Station is reported for all employees. In processing, we replace the last three
					positions of the duty station code with zeros for all foreign countries, U.S. possessions,
					and U.S. administered areas.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>99</p>
			</td>
			<td width="42">
				<p>1031</p>
			</td>
			<td width="126">
				<p>Agency Data 1</p>
			</td>
			<td width="245">
				<p>Agency specific data field 1.</p>
			</td>
			<td width="83">
				<p>Personnel Action Agency Data</p>
			</td>
			<td width="93">
				<p>VARCHAR(60)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>100</p>
			</td>
			<td width="42">
				<p>1032</p>
			</td>
			<td width="126">
				<p>Agency Data 2</p>
			</td>
			<td width="245">
				<p>Agency specific data field 2.</p>
			</td>
			<td width="83">
				<p>Personnel Action Agency Data</p>
			</td>
			<td width="93">
				<p>VARCHAR(60)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>101</p>
			</td>
			<td width="42">
				<p>1033</p>
			</td>
			<td width="126">
				<p>Agency Data 3</p>
			</td>
			<td width="245">
				<p>Agency specific data field 3.</p>
			</td>
			<td width="83">
				<p>Personnel Action Agency Data</p>
			</td>
			<td width="93">
				<p>VARCHAR(60)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>102</p>
			</td>
			<td width="42">
				<p>1034</p>
			</td>
			<td width="126">
				<p>Agency Data 4</p>
			</td>
			<td width="245">
				<p>Agency specific data field 4.</p>
			</td>
			<td width="83">
				<p>Personnel Action Agency Data</p>
			</td>
			<td width="93">
				<p>VARCHAR(60)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>103</p>
			</td>
			<td width="42">
				<p>1035</p>
			</td>
			<td width="126">
				<p>Agency Data 5</p>
			</td>
			<td width="245">
				<p>Agency specific data field 5.</p>
			</td>
			<td width="83">
				<p>Personnel Action Agency Data</p>
			</td>
			<td width="93">
				<p>VARCHAR(60)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>104</p>
			</td>
			<td width="42">
				<p>510</p>
			</td>
			<td width="126">
				<p>Personnel Action Approval Date</p>
			</td>
			<td width="245">
				<p>Date on which the action documented was approved.</p>
			</td>
			<td width="83">
				<p>Personnel Action Authorizer</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>105</p>
			</td>
			<td width="42">
				<p>430</p>
			</td>
			<td width="126">
				<p>Personnel Action Authorizer Family Name</p>
			</td>
			<td width="245">
				<p>The family name of the authorized official approving the personnel action.</p>
			</td>
			<td width="83">
				<p>Personnel Action Authorizer</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>106</p>
			</td>
			<td width="42">
				<p>431</p>
			</td>
			<td width="126">
				<p>Personnel Action Authorizer Given Name</p>
			</td>
			<td width="245">
				<p>The given name of the authorized official approving the personnel action.</p>
			</td>
			<td width="83">
				<p>Personnel Action Authorizer</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>107</p>
			</td>
			<td width="42">
				<p>432</p>
			</td>
			<td width="126">
				<p>Personnel Action Authorizer Middle Name</p>
			</td>
			<td width="245">
				<p>The middle name of the authorized official approving the personnel action.</p>
			</td>
			<td width="83">
				<p>Personnel Action Authorizer</p>
			</td>
			<td width="93">
				<p>VARCHAR(35)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>108</p>
			</td>
			<td width="42">
				<p>433</p>
			</td>
			<td width="126">
				<p>Personnel Action Authorizer Name Suffix</p>
			</td>
			<td width="245">
				<p>The name of the authorized official approving the personnel action.</p>
			</td>
			<td width="83">
				<p>Personnel Action Authorizer</p>
			</td>
			<td width="93">
				<p>VARCHAR(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>2</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>109</p>
			</td>
			<td width="42">
				<p>512</p>
			</td>
			<td width="126">
				<p>Personnel Action Authorizer Title</p>
			</td>
			<td width="245">
				<p>Title of the individual authorizing the personnel action.</p>
			</td>
			<td width="83">
				<p>Personnel Action Authorizer</p>
			</td>
			<td width="93">
				<p>VARCHAR(60)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>110</p>
			</td>
			<td width="42">
				<p>1008</p>
			</td>
			<td width="126">
				<p>Remarks Text</p>
			</td>
			<td width="245">
				<p>The remarks that explain the personnel action recorded on the Standard Form 50.</p>
			</td>
			<td width="83">
				<p>Personnel Action Remark</p>
			</td>
			<td width="93">
				<p>VARCHAR(2000)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>111</p>
			</td>
			<td width="42">
				<p>1070</p>
			</td>
			<td width="126">
				<p>Prior Special Basic Pay Supplement</p>
			</td>
			<td width="245">
				<p>
					Amount of prior special basic pay supplement established for a defined subcategory of
					employees in a pay system or subsystem as a prior secondary supplement. The prior special
					basic pay supplement applies in lieu of any applicable prior standard basic pay supplement
					that is a lower amount. The supplement is a regular, fixed payment for nonovertime hours
					of work that is creditable as prior basic pay for retirement purposes, excluding any type
					of prior premium payment or differential that is triggered for working certain hours of
					the day or week or for performing certain types of work. Includes prior GS special rate
					supplement or equivalent prior supplement. Express amount using same prior pay basis as
					used for prior basic pay rate.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>112</p>
			</td>
			<td width="42">
				<p>663</p>
			</td>
			<td width="126">
				<p>Special Basic Pay Supplement</p>
			</td>
			<td width="245">
				<p>
					Amount of special basic pay supplement established for a defined subcategory of employees
					in a pay system or subsystem as a secondary supplement. The special basic pay supplement
					applies in lieu of any applicable standard basic pay supplement that is a lower amount.
					The supplement is a regular, fixed payment for nonovertime hours of work that is
					creditable as basic pay for retirement purposes, excluding any type of premium payment or
					differential that is triggered for working certain hours of the day or week or for
					performing certain types of work. Includes GS special rate supplement or equivalent
					supplement. Express amount using same pay basis as used for basic pay rate.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>113</p>
			</td>
			<td width="42">
				<p>1071</p>
			</td>
			<td width="126">
				<p>Ethnicity and Race Identification</p>
			</td>
			<td width="245">
				<p>An employee's ethnicity and race identification.</p>
			</td>
			<td width="83">
				<p>Employee</p>
			</td>
			<td width="93">
				<p>NUMBER(6)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Ethnicity and Race Identification in the Guide to Data
					Standards. Only populated for employees starting on or after January 1, 2006 or existing
					employees who have been resurveyed.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>114</p>
			</td>
			<td width="42">
				<p>82</p>
			</td>
			<td width="126">
				<p>Citizenship Country Code</p>
			</td>
			<td width="245">
				<p>Employee's country of citizenship.</p>
			</td>
			<td width="83">
				<p>Employee</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Citizenship Country Code in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>115</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Special Population Code</p>
			</td>
			<td width="245">
				<p>
					Code that describes a position an employee holds which has special retirement calculation
					rules.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(3)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Special Population Code in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>116</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Appointment Excluded from CSRS indicator</p>
			</td>
			<td width="245">
				<p>
					Indicates if an employee's appointment is not covered under the CSRS plan as described by
					law, executive order, or regulation. This field will be used in retirement coverage
					determination.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>&nbsp;Y=Yes, N=No</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>117</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Appointment Excluded from FERS indicator</p>
			</td>
			<td width="245">
				<p>
					Indicates if an employee's appointment is not covered under the FERS plan as described by
					law, executive order, or regulation. This field will be used in retirement coverage
					determination.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>&nbsp;Y=Yes, N=No</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>118</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>FICA Coverage Indicator 1</p>
			</td>
			<td width="245">
				<p>
					Indicates if an employee is (1) an inmate working in a US penal institution, (2) a student
					employee as defined in 5 USC 5351(2), or (3) an individual serving on a temporary basis in
					case of fire, storm, earthquake, flood, or other similar emergency. This field will be
					used in retirement coverage determination.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>&nbsp;Y=Yes, N=No</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>119</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>FICA Coverage Indicator 2</p>
			</td>
			<td width="245">
				<p>
					Indicates if the employee is returning to duty after a detail to an international
					organization under 5 USC 3343 or being reemployed after transfer to an international
					organization under 5 USC 3581 is being restored to duty under the provisions of chapter 43
					of title 38, US code, after performing service as a member of a uniformed service is being
					reemployed after employment by a tribal organization to which section 105(e)(2) of the
					Indian Self Determination Act applies. This field will be used in retirement coverage
					determination.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>&nbsp;Y=Yes, N=No</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>120</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Personnel Action Effective Sequence</p>
			</td>
			<td width="245">
				<p>
					A number indicating the order in which a personnel action was processed on a given date.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>NUMBER(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					The first action of the day should be coded as "1", the second action as "2", and so on.
					Every record should have a value in this field; if there is only one action per day for an
					employee, this field should have a "1". Systems with a timestamp to represent the
					processing sequence must translate this to a sequence number for EHRI.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>121</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Hypothetical Full-time Regular Tour of Duty for Part-time Employees</p>
			</td>
			<td width="245">
				<p>
					This is used to compute retirement benefit for part-time employees. This represents the
					number of hours generally considered to comprise a full-time schedule for the employees
					particular employment group or class. This will usually be 80 hours for a bi-weekly pay
					period. There are, however, a few exceptions where the number of hours that comprise a
					full-time schedule may be higher or lower than 80 hours. See CSRS and FERS Handbook,
					section 81A2.2-1-C.1.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>122</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>FEGLI Assignment Indicator</p>
			</td>
			<td width="245">
				<p>
					5 CFR 870.101: Assign and assignment refer to an individual's irrevocable transfer to
					another individual, corporation, or trustee all ownership of FEGLI coverage (except Option
					C). Option C may not be assigned.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference FEGLI Assignment Indicator in the Guide to Data Standards.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>123</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>FEGLI Post-Election Basic Insurance Amount</p>
			</td>
			<td width="245">
				<p>
					5 CFR 870.203: The post-election basic insurance amount of an individual who elects a
					Living Benefit is the amount of insurance left after the full or partial election. This
					amount is the individual's post-election BIA. This is NOT the amount of the living benefit
					(See below). The post-election BIA cannot change after the effective date of a Living
					Benefit election.
				</p>
				<p>
					Living Benefit &ndash; 5 CFR 870.1102: An employee may elect to receive either: (i) A full
					Living Benefit, which is all of his/her Basic insurance, or (ii) A partial Living Benefit,
					which is a portion of his/her Basic insurance, in a multiple of $1,000. (2) An annuitant
					or compensationer may only elect to receive a full Living Benefit.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>DECIMAL(9,2)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>124</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Court Orders for FEGLI Purposes Indicator</p>
			</td>
			<td width="245">
				<p>
					Indicates whether an employee has a court order for FEGLI purposes per 5 CFR 870.801 on
					file. Court order means any court decree of divorce, annulment, or legal separation, or
					the terms of any court order or court-approved property settlement agreement relating to
					any court decree of divorce, annulment, or legal separation, the terms of which require
					FEGLI benefits to be paid to a specific person or persons.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Court Orders for FEGLI Purposes Indicator in the Guide to Data
					Standards.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>125</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Designation of FEGLI Beneficiaries Indicator</p>
			</td>
			<td width="245">
				<p>
					FEGLI Handbook: Notice, signed by insured and witnessed by two persons, indicating the
					person(s) to receive life insurance benefits. The form used for life insurance
					designations is the Designation of Beneficiary form (SF 2823).
				</p>
			</td>
			<td width="83">
				<p>Personnel Action Modification Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Designation of FEGLI Beneficiaries Indicator in the Guide to
					Data Standards.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>126</p>
			</td>
			<td width="42">
				<p>257</p>
			</td>
			<td width="126">
				<p>Health Plan</p>
			</td>
			<td width="245">
				<p>
					The health benefits plan (carrier and enrollment category) in which an employee is
					currently enrolled.
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(3)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Health Plan in The Guide to Personnel Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>127</p>
			</td>
			<td width="42">
				<p>252</p>
			</td>
			<td width="126">
				<p>Federal Employees Health Benefits (FEHB) Event Code</p>
			</td>
			<td width="245">
				<p>
					Code for the event permitting the Federal Employees Health Benefits (FEHB) change for the
					employee
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>VARCHAR(4)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values, reference Federal Employees Health Benefits (FEHB) Event Code</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>128</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Federal Employees Health Benefits (FEHB) Effective Date</p>
			</td>
			<td width="245">
				<p>
					Date on which the employee's current Federal Employees Health Benefits (FEHB) coverage is
					effective
				</p>
			</td>
			<td width="83">
				<p>Personnel Action</p>
			</td>
			<td width="93">
				<p>DATE</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">&nbsp;</td>
		</tr>
		<tr>
			<td width="36">
				<p>129</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Cybersecurity Category/Speciality Area</p>
			</td>
			<td width="245">
				<p>
					A position&rsquo;s or incumbent&rsquo;s substantial work role involving information
					technology, cybersecurity, or cyber-related work.
				</p>
			</td>
			<td width="83">
				<p>Employee Occupation</p>
			</td>
			<td width="93">
				<p>NUMBER(9)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values reference Cybersecurity Category/Speciality Area in the Guide to Data
					Standards
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>130</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Position Sensitivity and Risk</p>
			</td>
			<td width="245">
				<p>The designation of the risk and sensitivity associated with a position.</p>
			</td>
			<td width="83">
				<p>Employee Suitability</p>
			</td>
			<td width="93">
				<p>NUMBER_F</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values reference Position Sensitivity and Risk in the Guide to Data Standards.
				</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>131</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Security Clearance Level</p>
			</td>
			<td width="245">
				<p>The degree of potential access to information and materials.</p>
			</td>
			<td width="83">
				<p>Employee Suitability</p>
			</td>
			<td width="93">
				<p>NUMBER_F</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>For valid values reference Security Clearance Level in the Guide to Data Standards.</p>
			</td>
		</tr>
		<tr>
			<td width="36">
				<p>132</p>
			</td>
			<td width="42">&nbsp;</td>
			<td width="126">
				<p>Program and Project Management Job Identifier</p>
			</td>
			<td width="245">
				<p>
					Federal positions with program management, project management and program and project
					management functions
				</p>
			</td>
			<td width="83">
				<p>Employee Position Assignment</p>
			</td>
			<td width="93">
				<p>VARCHAR(1)</p>
			</td>
			<td width="60">&nbsp;</td>
			<td width="47">
				<p>1</p>
			</td>
			<td width="228">
				<p>
					For valid values, reference Program and Project Management Job Identifier in the Data
					Standards Guide
				</p>
			</td>
		</tr>
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse; /* No double borders */
		margin: 20px 0;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 16px;
		background-color: #ffffff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		overflow: hidden;
		border: 1px solid #ddd;
	}

	thead tr {
		background-color: #2c3e50;
		text-align: left;
		border-bottom: 2px solid #ddd;
	}

	thead th {
		color: #ffffff !important; /* Ensures white text */
		padding: 14px 18px;
		font-weight: bold;
		font-style: italic;
		font-size: 17px;
		border-right: 1px solid #ddd;
	}

	thead th p {
		color: #ffffff !important; /* Ensures white text inside <p> */
		margin: 0;
	}

	thead th:last-child {
		border-right: none;
	}

	tbody tr {
		border-bottom: 1px solid #e0e0e0;
	}

	tbody tr:nth-of-type(even) {
		background-color: #f9f9f9;
	}

	tbody tr:hover {
		background-color: #f1f1f1;
	}

	tbody td {
		padding: 14px 18px;
		vertical-align: top;
		border-right: 1px solid #ddd;
	}

	tbody td:last-child {
		border-right: none;
	}

	tbody td p {
		margin: 0 0 10px;
		line-height: 1.6;
	}

	tbody td a {
		color: #007bff;
		text-decoration: none;
	}

	tbody td a:hover {
		text-decoration: underline;
	}

	tbody td:first-child {
		font-weight: bold;
		text-align: center;
		background-color: #f7f7f7;
		color: #2c3e50;
	}

	tbody td:first-child p {
		margin: 0;
	}

	@media screen and (max-width: 768px) {
		table,
		thead,
		tbody,
		tr,
		td,
		th {
			display: block;
			width: 100%;
		}

		thead {
			display: none;
		}

		tbody tr {
			margin-bottom: 15px;
			border: 1px solid #ddd;
			border-radius: 8px;
			padding: 10px;
			background-color: #ffffff;
		}

		tbody td {
			padding: 10px;
			text-align: left;
			border-right: none;
		}

		tbody td:first-child {
			background-color: transparent;
			font-size: 18px;
			font-weight: bold;
			text-align: left;
		}
	}
</style>
