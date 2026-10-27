/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { getMyCommissions, setCommissionStatus } from "../../lib/storefront";

const nextStatuses = {
  requested: ["accepted", "declined"],
  accepted: ["in_progress"],
  in_progress: ["completed"],
};
const labels = { requested: "Requested", accepted: "Accepted", declined: "Declined", in_progress: "In progress", completed: "Completed" };

function RequestCard({ request, seller, onStatus }) {
  return <article className="rounded-xl border border-base-300 bg-base-100 p-5 shadow-sm">
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div><h3 className="text-xl font-bold">{request.title}</h3>
        <p className="text-sm opacity-70">{seller ? request.buyerEmail : request.artistName}</p></div>
      <span className="badge badge-outline">{labels[request.status] || request.status}</span>
    </div>
    <p className="mt-4 whitespace-pre-wrap">{request.brief}</p>
    <p className="mt-3 font-semibold">Estimated budget: {request.budget}৳</p>
    {request.referenceUrl && <a className="link mt-2 inline-block" href={request.referenceUrl} target="_blank" rel="noreferrer">View reference</a>}
    {seller && nextStatuses[request.status] && <div className="mt-5 flex flex-wrap gap-2">{nextStatuses[request.status].map((status) =>
      <button key={status} className="btn btn-sm btn-outline" onClick={() => onStatus(request.id, status)}>{labels[status]}</button>)}</div>}
  </article>;
}

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({ selling: [], buying: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Requests and orders | Pixel";
    let active = true;
    getMyCommissions(user.uid).then((result) => active && setData(result))
      .catch((reason) => active && setError(reason.message))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [user.uid]);

  const refresh = async () => {
    setError("");
    try { setData(await getMyCommissions(user.uid)); }
    catch (reason) { setError(reason.message); }
  };
  const changeStatus = async (id, status) => {
    setError("");
    try {
      await setCommissionStatus(id, status);
      await refresh();
    } catch (reason) { setError(reason.message); }
  };
  const byNewest = (a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0);

  return <div className="my-10 rounded-2xl bg-base-100 p-6 shadow-xl md:p-10">
    <div className="flex items-center justify-between gap-4"><div><h1 className="font-pixel text-4xl">Requests and orders</h1>
      <p className="mt-2">Track commissions from request to completion.</p></div>
      <button className="btn btn-outline" onClick={refresh}>Refresh</button></div>
    {error && <p className="alert alert-error mt-5" role="alert">{error}</p>}
    {loading ? <p className="mt-8">Loading requests…</p> : <>
      <section className="mt-10"><h2 className="font-pixel text-3xl">Received requests</h2>
        {data.selling.length === 0 ? <p className="mt-4">No requests for your storefront yet.</p> :
          <div className="mt-5 grid gap-4 md:grid-cols-2">{[...data.selling].sort(byNewest).map((request) =>
            <RequestCard key={request.id} request={request} seller onStatus={changeStatus} />)}</div>}</section>
      <section className="mt-12"><h2 className="font-pixel text-3xl">Requests you sent</h2>
        {data.buying.length === 0 ? <p className="mt-4">You have not requested a commission yet.</p> :
          <div className="mt-5 grid gap-4 md:grid-cols-2">{[...data.buying].sort(byNewest).map((request) =>
            <RequestCard key={request.id} request={request} />)}</div>}</section>
    </>}
  </div>;
};

export default Orders;
