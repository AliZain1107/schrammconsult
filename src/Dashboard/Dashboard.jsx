import  { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import Loader from "../Loader";

function Dashboard() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const correctPassword = "admin123";

  useEffect(() => {
    if (isAuthenticated) {
      const fetchLeads = async () => {
        setIsLoading(true);
        try {
          const querySnapshot = await getDocs(collection(db, "leads"));
          setLeads(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        } catch (error) {
          console.error("Error fetching leads:", error);
          alert("Failed to fetch leads. Please try again.");
        } finally {
          setIsLoading(false);
        }
      };
      fetchLeads();
    }
    setIsVisible(true);
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) setIsAuthenticated(true);
    else alert("Incorrect password");
  };
  const handleActiveItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  const handleBack = () => navigate("/thank-you");

  if (!isAuthenticated) {
    return (
      <ErrorBoundary>
      <div className={`max-w-lg relative z-[9999] mx-auto bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Login</h1>
        <form onSubmit={handleLogin}>
        <label className="block mb-4">
          <span className="text-gray-600">Enter password</span>
          <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </label>
        <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-orange-600 transition">
          Login
        </button>
        </form>
      </div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div className={`relative z-[9999] max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Leads Dashboard</h1>
        {isLoading ? (
          <Loader />
        ) : leads.length === 0 ? (
          <p className="text-gray-600">No leads found.</p>
        ) : (
          <ul className="space-y-2">
            {leads.map((lead,index) => (
              <li onClick={()=>handleActiveItem(lead.id)} key={lead.id} className={`cursor-pointer overflow-hidden p-4 pb-1 bg-gray-50 rounded-md border border-gray-200`}>
                <p className="text-gray-800">
                  <span className="font-semibold text-cyan-800 uppercase">{lead.firstName} {lead.lastName}</span> <span> - </span>
                  <a href={`mailto:${lead.email}`} className="text-primary hover:underline">{lead.email}</a>
                 
                </p>
                <div className={`${activeItem=== lead.id? 'max-h-[320px]':'max-h-[0px] opacity-0'} transition-all duration-300  overflow-hidden pl-4 p-2 `}>

                    Insurance: {lead.insuranceType} - Status: {lead.professionalStatus} - Package: {lead.package}
                <p className="text-gray-600 text-sm">
                  Options: {lead.additionalOptions.join(", ")} - ZIP: {lead.zipCode} - DOB: {lead.dateOfBirth} - Timestamp: {new Date(lead.timestamp.seconds * 1000).toLocaleString()}
                </p>
                <p className="text-gray-600 text-sm">
                  Interest: {lead.interest || "N/A"} - Preference: {lead.contactPreference || "N/A"}
                </p>
                <p>
                  <a href={`tel:${lead.telephone}`} className="text-primary hover:underline">Phone: {lead.telephone}</a>
                </p>
                  </div>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={handleBack}
          className="mt-6 w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition flex items-center justify-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>Back</span>
        </button>
      </div>
    </ErrorBoundary>
  );
}

export default Dashboard;