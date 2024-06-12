'use client';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import {
  authenticate,
  handleGoogleSignIn,
  handlePostmarkSignIn,
} from '@/app/lib/actions';

export default function LoginForm() {
  const [errorMessageCredentialsSignin, dispatchCredentialsSignin] =
    useFormState(authenticate, undefined);

  return (
    <div className="flex-1 space-y-3 rounded-lg bg-gray-50 px-6 pb-8 pt-8">
      <form action={dispatchCredentialsSignin} className="space-y-3">
        <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton />
        <div className="flex items-end space-x-1">
          <div
            className="flex items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessageCredentialsSignin && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">
                  {errorMessageCredentialsSignin}
                </p>
              </>
            )}
          </div>
        </div>
      </form>
      <div className="seperator my-20 flex items-center">
        <hr className="w-1/2" />
        <div className="px-3 text-sm">OR</div>
        <hr className="w-1/2" />
      </div>
      <SignInGoogle />
      <div className="seperator my-20 flex items-center">
        <hr className="w-1/2" />
        <div className="px-3 text-sm">OR</div>
        <hr className="w-1/2" />
      </div>
      <SignInPostMark />
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="btn btn-primary w-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5" />
    </Button>
  );
}

export function SignInGoogle() {
  return (
    <form action={handleGoogleSignIn}>
      <button type="submit" className="btn btn-primary__outlined w-full">
        Signin with Google
        <ArrowRightIcon className="ml-auto h-5 w-5" />
      </button>
    </form>
  );
}

export function SignInPostMark() {
  const [errorMessageMagicSignin, dispatchMagicSignin] = useFormState(
    handlePostmarkSignIn,
    undefined,
  );
  return (
    <form action={dispatchMagicSignin} className="flex-1 space-y-3 ">
      <div className="relative">
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
        />
        <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
      <button type="submit" className="btn btn-primary__outlined w-full">
        Magic Signin Link
        <ArrowRightIcon className="ml-auto h-5 w-5" />
      </button>
      <div className="flex items-end space-x-1">
        <div
          className="flex items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessageMagicSignin && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessageMagicSignin}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
