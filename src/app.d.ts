/// <reference types="@sveltejs/kit" />

import type { User } from '$lib/types/user';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	interface Session {
		user: User;
	}
	// interface Stuff {}
}
