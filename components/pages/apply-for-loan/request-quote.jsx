'use client'

import React, { useState } from 'react';

const RequestQuoteMain = () => {
    const [formDetails, setFormDetails] = useState({
        dateOfApplication: "",
        name: "",
        middleName: "",
        surname: "",
        dob: "",
        id: "",
        nationality: "",
        gender: "",
        maritalStatus: "",
        phoneNumber: "",
        email: "",
        accommodation: "",
        loanPurpose: "",
        street: "",
        town: "",
        city: "",
        country: "",
        landlord: "",
        landlordContactNumber: "",
        durationOfStay: 0,
        dependents: 0,
        employer: "",
        employerAddress: "",
        employerPhone: "",
        employerEmail: "",
        periodOfEmployment: "",
        ecNumber: "",
        employmentStatus: "",
        position: "",
        grossIncome: "",
        netIncome: "",
        nextOfKinName: "",
        nextOfKinAddress: "",
        nextOfKinContact: "",
        nextOfKinRelationship: "",
        businessName: "",
        areaOfOperation: "",
        businessNature: "",
        durationOfOperation: "",
        amount: 0,
        tenure: 0,
        bank: "",
        bankBranch: "",
        branchCode: "",
        accountNumber: "",
        guarantorName: "",
        guarantorID: "",
        guarantorAddress: "",
        guarantorContact: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="request__quote section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <form action="#">
                            <div className="row">
                                {/* Personal Information Section */}
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>First Name<span> *</span></label>
                                        <input type="text" name="name" placeholder="First Name" value={formDetails.name} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Middle Name</label>
                                        <input type="text" name="middleName" placeholder="Middle Name" value={formDetails.middleName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Surname<span> *</span></label>
                                        <input type="text" name="surname" placeholder="Surname" value={formDetails.surname} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Date of Birth<span> *</span></label>
                                        <input type="date" name="dob" placeholder="DOB" value={formDetails.dob} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>ID<span> *</span></label>
                                        <input type="text" name="id" placeholder="ID" value={formDetails.id} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Nationality<span> *</span></label>
                                        <input type="text" name="nationality" placeholder="Nationality" value={formDetails.nationality} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Gender<span> *</span></label>
                                        <select name="gender" value={formDetails.gender} onChange={handleChange} required>
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Marital Status<span> *</span></label>
                                        <select name="maritalStatus" value={formDetails.maritalStatus} onChange={handleChange} required>
                                            <option value="">Select Status</option>
                                            <option value="single">Single</option>
                                            <option value="married">Married</option>
                                            <option value="divorced">Divorced</option>
                                            <option value="widowed">Widowed</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Phone Number<span> *</span></label>
                                        <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formDetails.phoneNumber} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Email Address<span> *</span></label>
                                        <input type="email" name="email" placeholder="Email" value={formDetails.email} onChange={handleChange} required />
                                    </div>
                                </div>

                                {/* Address Section */}
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Street<span> *</span></label>
                                        <input type="text" name="street" placeholder="Street Address" value={formDetails.street} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Town<span> *</span></label>
                                        <input type="text" name="town" placeholder="Town" value={formDetails.town} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>City<span> *</span></label>
                                        <input type="text" name="city" placeholder="City" value={formDetails.city} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Country<span> *</span></label>
                                        <input type="text" name="country" placeholder="Country" value={formDetails.country} onChange={handleChange} required />
                                    </div>
                                </div>

                                {/* Employment Section */}
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Employer<span> *</span></label>
                                        <input type="text" name="employer" placeholder="Employer" value={formDetails.employer} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Employer Address<span> *</span></label>
                                        <input type="text" name="employerAddress" placeholder="Employer Address" value={formDetails.employerAddress} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Employer Phone<span> *</span></label>
                                        <input type="tel" name="employerPhone" placeholder="Employer Phone" value={formDetails.employerPhone} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Employer Email<span> *</span></label>
                                        <input type="email" name="employerEmail" placeholder="Employer Email" value={formDetails.employerEmail} onChange={handleChange} required />
                                    </div>
                                </div>

                                {/* Additional Details */}
                                <div className="col-md-12 mb-30">
                                    <div className="request__quote-item">
                                        <label>Message<span> *</span></label>
                                        <textarea name="message" value={formDetails.message} onChange={handleChange}></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <button className="btn-one mt-30" type="submit">Submit <i className="far fa-chevron-double-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestQuoteMain;
