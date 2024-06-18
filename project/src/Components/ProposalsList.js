import React from 'react';
import { Link } from 'react-router-dom';

const initialProposals = [
  { id: 1, title: 'Test', description: 'This is an test proposal' },
  { id: 2, title: 'Test 2', description: 'This is an test' },
];

function ProposalsList() {
  return (
    <div>
      <header className="header">
        <h1>Proposals</h1>
        
        <nav className="nav">
          <button>Get My Proposals</button>
          <button>View All Proposals</button>
          <button>Add Proposals</button>
        </nav>
      </header>
      <div className="proposals">
        {initialProposals.map((proposal) => (
          <div key={proposal.id} className="proposal">
            <h2><Link to={/proposal/${proposal.id}}>{proposal.title}</Link></h2>
            <p>{proposal.description}</p>
            
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProposalsList;