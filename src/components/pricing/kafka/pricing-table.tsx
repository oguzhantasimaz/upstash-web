import Button from "@/components/button";

export default function PricingTable() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/**/}

      {/* FREE */}

      <div className="flex flex-col items-center gap-6 rounded-3xl bg-white/5 px-4 py-8">
        <div className="grow">
          <h4 className="mb-2 text-xl font-semibold text-emerald-400">Free</h4>

          <h5 className="text-3xl font-semibold">$0</h5>
          <p className="text-white/40">-</p>
        </div>

        <div className="grow">
          <div className="text-white/80">
            Perfect for prototypes and hobby projects.
          </div>
        </div>

        <hr className="w-2/3 border-0 border-b border-b-white/5" />

        <div>
          <p className="text-sm text-white/40">Max Messages Daily</p>
          <p className="font-semibold">10,000</p>
        </div>

        <div>
          <p className="text-sm text-white/40">Max Messages Per Second</p>
          <p className="font-semibold">1,000</p>
        </div>

        <hr className="w-2/3 border-0 border-b border-b-white/5" />

        <div>
          <Button
            target="_self"
            type="button"
            hideIcon
            href="https://console.upstash.com"
            className="bg-zinc-50 font-medium text-zinc-950"
          >
            Start Now
          </Button>
        </div>
      </div>

      {/* PAYG */}

      <div className="flex flex-col items-center gap-6 rounded-3xl border-2 border-white/20 bg-white/10 px-4 py-8">
        <div className="grow">
          <h4 className="mb-2 text-xl font-semibold text-emerald-400">
            Pay as you go
          </h4>

          <h5 className="text-3xl font-semibold">$0.6</h5>
          <p className="text-white/40">per 100K messages </p>
          <p className="text-white/40">Single Replica: $0.2</p>
        </div>

        <div className="-mt-6 grow">
          <div className="text-white/80">
            For use cases with bursting traffic.
          </div>
        </div>

        <hr className="w-2/3 border-0 border-b border-b-white/5" />

        <div>
          <p className="text-sm text-white/40">Max Messages Daily</p>
          <p className="font-semibold">Unlimited</p>
        </div>

        <div>
          <p className="text-sm text-white/40">Max Messages Per Second</p>
          <p className="font-semibold">1,000</p>
        </div>

        <hr className="w-2/3 border-0 border-b border-b-white/5" />

        <div>
          <Button
            target="_self"
            type="button"
            hideIcon
            href="https://console.upstash.com"
            className="bg-zinc-50 font-medium text-zinc-950"
          >
            Start Now
          </Button>
        </div>
      </div>

      {/* PRO 2K */}

      <div className="flex flex-col items-center gap-6 rounded-3xl bg-white/5 px-4 py-8">
        <div>
          <h4 className="mb-2 text-xl font-semibold text-emerald-400">
            Pro 2K
          </h4>

          <h5 className="flex items-baseline text-3xl font-semibold">
            $320
            <span className="ml-1 text-base font-normal opacity-40">
              / month
            </span>
          </h5>
          <p className="text-white/40">-</p>
        </div>

        <div>
          <div className="text-white/80">
            For businesses with consistent high-capacity loads and predictable
            costs.
          </div>
        </div>

        <hr className="w-2/3 border-0 border-b border-b-white/5" />

        <div>
          <p className="text-sm text-white/40">Max Messages Daily</p>
          <p className="font-semibold">Unlimited</p>
        </div>

        <div>
          <p className="text-sm text-white/40">Max Messages Per Second</p>
          <p className="font-semibold">2,000</p>
        </div>

        <hr className="w-2/3 border-0 border-b border-b-white/5" />

        <div>
          <Button
            target="_self"
            type="button"
            hideIcon
            href="https://console.upstash.com"
            className="bg-zinc-50 font-medium text-zinc-950"
          >
            Start Now
          </Button>
        </div>
      </div>

      {/* PRO 10K */}

      <div className="flex flex-col items-center gap-6 rounded-3xl bg-white/5 px-4 py-8">
        <div>
          <h4 className="mb-2 text-xl font-semibold text-emerald-400">
            Pro 10K
          </h4>

          <h5 className="flex items-baseline text-3xl font-semibold">
            $520
            <span className="ml-1 text-base font-normal opacity-40">
              / month
            </span>
          </h5>
          <p className="text-white/40">-</p>
        </div>

        <div>
          <div className="text-white/80">
            For businesses with consistent high-capacity loads and predictable
            costs.
          </div>
        </div>

        <hr className="w-2/3 border-0 border-b border-b-white/5" />

        <div>
          <p className="text-sm text-white/40">Max Messages Daily</p>
          <p className="font-semibold">Unlimited</p>
        </div>

        <div>
          <p className="text-sm text-white/40">Max Messages Per Second</p>
          <p className="font-semibold">10,000</p>
        </div>

        <hr className="w-2/3 border-0 border-b border-b-white/5" />

        <div>
          <Button
            target="_self"
            type="button"
            hideIcon
            href="https://console.upstash.com"
            className="bg-zinc-50 font-medium text-zinc-950"
          >
            Start Now
          </Button>
        </div>
      </div>
    </div>
  );
}
