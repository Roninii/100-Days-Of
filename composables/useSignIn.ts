export function useSignIn(ctx: any) {
  const signIn = async (email: string, password: string) => {
    try {
      await ctx.root.$fireAuth.signInWithEmailAndPassword(email, password)

      ctx.root.$router.push({ path: '/dashboard' })
    } catch (e) {
      console.log(e)
    }
  }

  return {
    signIn,
  }
}
