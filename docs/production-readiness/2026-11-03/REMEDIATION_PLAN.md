# proofpress-evidence-portal — remediation plan

This is a future-work plan, not a record of fixes or tests. Findings refer to [REVIEW.md](REVIEW.md). No target code, installation, browser or deployment was run for this review. All test and workflow paths below are proposed unless identified as observed.

## Phase 0 — Baseline and ownership

Entry: pinned static prototype. Exit: reproducible baseline and explicit host/ledger decisions.

### T01 — Map the real journey (F01, F03, F04, F07)

Prerequisites: repository owner and CMS maintainer. Observed paths: `README.md`, `index.html`, `below-world.v4.js`.

1. Record the supported standalone and Webflow-shell URLs, the actual helper version loaded by the host, and the reviewed revision; preserve the existing Pages-run URL as historical evidence only.
2. With authorized access, trace the user from both entry points to the real ledger, identifying the CMS owner, approved link, permissions and failure behavior. Document the observed route rather than inferring it from the sample claims.
3. Ask the owner whether direct visitors should receive a ledger link or host-page instructions. Confirm the intended `../NOTES.md` destination before replacing or removing it.
4. With the host owner, identify the deployed helper and trace each displayed metric to its source, measured build and date. If host access or provenance is unavailable, record it as blocked rather than assuming v4 is deployed or the score is current.

**Output:** owner-approved integration map and baseline notes. **Verification:** inspect both routes and a deliberately unavailable ledger in an authorized test environment; record URL, revision, date and observed behavior without customer data.
- [ ] Host, frame, ledger owners and approved origins are named.
- [ ] Notes-link disposition and standalone support decision are recorded.
- [ ] Missing CMS access or an unavailable route is reported as blocked, not a pass.
- [ ] Deployed helper and metric source, build and date are evidenced, or the missing access/provenance is recorded as blocked.

## Phase 1 — Correctness and accessible journey

Entry: T01 decisions. Exit: navigation and ledger handoff work in the agreed contexts.

### T02 — Repair shortcuts and source-of-truth handoff (F01, F03, F05)

Prerequisites: T01. Observed paths: `index.html`, `README.md`.

1. Reproduce Space and Enter on the gate, previous/next and signal buttons, plus station shortcuts; capture which focused element receives each action.
2. Restrict global shortcuts when focus is on interactive or editable elements, preserving native button activation and documented shortcuts elsewhere. Correct the notes link and implement the owner-approved standalone handoff without claiming the 3D examples are live ledger records.
3. Provide a visible, keyboard-reachable route or accurate host-context instructions, with an honest unavailable state; retain the distinction between decorative claims and the authoritative CMS.

**Output:** corrected navigation, link and source-of-truth copy. **Verification:** exercise each control with Space and Enter; verify one activation causes only its intended action, and verify the standalone and embedded handoffs independently.
- [ ] All relevant buttons activate natively and no unintended room advance occurs.
- [ ] Link target and wording are owner-approved and tested.
- [ ] A missing ledger is not represented as approved evidence.

### T03 — Equivalent non-graphics and reduced-motion path (F02)

Prerequisites: T02. Observed path: `index.html`; proposed fallback markup remains to be designed.

1. Inventory all seven room messages and meaningful 3D-only content, then define a readable, navigable equivalent for renderer failure and unavailable module loading.
2. Test failure before and after module initialization, keyboard-only use, screen-reader focus/announcements, narrow screens and zoom. Respect reduced motion throughout the experience, including changes to preference during a session, if supported by the chosen design.
3. Implement the agreed fallback and focus handling; ensure optional audio remains off until explicitly enabled and can be disabled again.

**Output:** documented accessible fallback and interaction design. **Verification:** block WebGL and the CDN separately, then reach each agreed message and the ledger route without a mouse; manually inspect motion and audio behavior under normal and reduced-motion settings.
- [ ] Seven-room content and the handoff remain accessible without graphics.
- [ ] Keyboard, screen-reader, zoom and reduced-motion results are recorded with environment details.
- [ ] Audio opt-in and off behavior are observed, not inferred from markup.

## Phase 2 — Security and external dependencies

Entry: T01 identifies legitimate host/origins; T02 and T03 define the supported user journey. Exit: trust boundaries are documented and tested.

### T04 — Bind frame messages and review dependencies (F06; preventive)

Prerequisites: T01–T03; coordinate with the external shell owner. Observed paths: `index.html`, `below-world.v4.js`.

1. Document exact parent/frame origins and message types for every supported embedding context; decide how standalone usage behaves when there is no trusted parent.
2. Validate both sender origin and source on receipt, accept only documented payloads and room values, and use the exact target origin for sends. Coordinate host changes so the contract remains compatible.
3. Review the pinned Three.js URL, Google Fonts, applicable CSP and update policy; inspect the real CMS for authorization, secret and data exposure with its owner. Treat the uninspected variants as separate review work, not automatically safe or active.

**Output:** message contract, dependency inventory and security decisions. **Verification:** in controlled frames, confirm trusted parent messages work and wrong-origin, wrong-source, malformed and out-of-range messages cannot alter state; check permitted resources and failures under the proposed CSP.
- [ ] The positive host test and every negative message test are observed.
- [ ] External resource ownership and update policy are approved.
- [ ] CMS authorization and sensitive-data handling are verified or explicitly blocked.

## Phase 3 — Meaningful automation and release

Entry: agreed behavior from T02–T04. Exit: independently verified checks and an owner-approved release procedure.

### T05 — Establish regression gates (F04, F05, F06, F07; preventive)

Prerequisites: T02–T04. No test manifest or authored workflow exists in the recorded tree; test files and workflow are **proposed**, not current.

1. Choose a supported browser-test tool and define its installation, version-locking and scripts in a proposed manifest; select representative standalone and host fixtures without real customer data.
2. Add user-visible assertions for gate, focused-button activation, station content, ledger handoff, module/WebGL failure and audio opt-in; test frame-origin rejection through the actual integration boundary.
3. Add a proposed CI workflow that invokes the newly defined scripts and reports skipped or unavailable browser/CMS cases separately. Keep manual screen-reader and visual checks in the acceptance record.
4. For the actual deployed helper, preserve verified metric values or explicitly mark them unavailable when observation cannot occur; do not change the CMS ledger as a presumed fix. In a proposed host fixture containing a nonzero metric, test the normal observer/intersection path and the observer-unavailable path with reduced motion off.

**Output:** reproducible tests, metric fallback and a documented CI gate. **Verification:** deliberately break a shortcut, fallback and origin check one at a time and confirm the corresponding test fails; restore each change and rerun. For the nonzero fixture, assert the displayed original value after normal observation and, without an observer, either the preserved value or an explicit unavailable state; deliberately force a displayed zero and confirm the assertion fails. Tests must exercise shipped behavior, not a copy of implementation logic.
- [ ] Negative controls fail for the intended reason and normal cases pass.
- [ ] Skips, browser versions and external-service limitations are visible.
- [ ] No existing threshold or test is weakened to obtain a green result.
- [ ] Nonzero metric fixture passes both normal and observer-unavailable paths; a false-zero negative control fails.
- [ ] Host access, deployed helper or metric provenance gaps are recorded as blocked, not passed.

### T06 — Release, rollback and independent acceptance (F01–F07; preventive)

Prerequisites: T05 and owner approval; observed `.nojekyll` and `index.html`. Deployment platform and host configuration must be confirmed first.

1. Define the release owner, approved revision, asset inventory, configuration and prior known-good artifact; document how the Webflow shell and standalone Pages version are deployed independently.
2. In an authorized staging environment, publish the reviewed artifact, verify the served revision and run the standalone, embedded, ledger-unavailable and security checks against what is actually served.
3. Exercise rollback to the preserved prior artifact and verify both served revision and user journey; record limitations if the CMS or host cannot be rolled back together.

**Output:** release record, observed staging evidence and rollback procedure. **Verification:** an independent reviewer repeats the critical checks against the served artifact and records results; a CI success alone is insufficient.
- [ ] Release and rollback observations identify the artifact and host.
- [ ] Independent reviewer accepts the supported flows and documented exceptions.
- [ ] Owner approves production publication separately; no publication is implied here.

## Dependencies and production acceptance

| Task | Requires | Gate |
|---|---|---|
| T01 | Owner and CMS access | Integration and source-of-truth decision |
| T02 | T01 | Native controls and correct handoff |
| T03 | T02 | Equivalent fallback and motion evidence |
| T04 | T01, T02, T03 | Trusted messaging and dependency review |
| T05 | T02–T04 | Meaningful positive and negative regression tests |
| T06 | T05, owner approval | Independent staged acceptance and observed rollback |

Production acceptance requires an accessible agreed journey, verified ledger permissions, approved origins and resources, reproducible gates, and an observed recovery procedure. CMS access, external-shell changes, production publication, resource policy and rollback authority require owner approval. If any dependency is unavailable, record the blocker and do not declare the release accepted.
