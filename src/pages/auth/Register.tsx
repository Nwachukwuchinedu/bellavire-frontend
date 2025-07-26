import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore, UserRole } from '@/stores/authStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import BackgroundCarousel from '@/components/auth/BackgroundCarousel';
import { DefaultInput } from '@/components/input/DefaultInput';
import { LockKeyhole } from 'lucide-react';
import Logo from "@/assets/images/logo.png"
import Warning from "@/assets/icons/warning.svg"
import Google from "@/assets/icons/google.svg"

const Register = () => {
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type"); 


  const [formData, setFormData] = useState({
    organizationName: '',
    Phone: '',
    name: '',
    email: '',
    password: '',
    role: '' as UserRole,
  });
  
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock registration - replace with actual authentication
    const newUser = {
      id: Date.now().toString(),
      email: formData.email,
      name: formData.name,
      role: formData.role,
    };
    const newOrganization = {
      id: Date.now().toString(),
      email: formData.email,
      name: formData.organizationName,
      role: formData.role,
    };
    
    login(newUser);
    navigate('/dashboard');
  };

  return (
        <div className="grid min-h-svh  lg:grid-cols-10">
            <div className='lg:col-span-4'>
            {/* <div className='max-w-[632px] lg:min-w-[632px] col-span-3'> */}
              <BackgroundCarousel />
            </div>
            {type === "organization" && (             
            <div className="pb-12 md:pb-0 md:px-10 spans-2 lg:col-span-6 lg:px-20">
                <div className="flex flex-1 items-center justify-center">
                      <div className='w-full max-w-md rounded-lg bg-white px-8 pt-3 pb-2 md:pb-10'>
                        <div className='flex flex-col items-center justify-center mb-6'>
                          <img src={Logo} alt="" className='w-36 md:w-52 '/>
                          <h2 className='text-[#1e1e1e] font-semibold text-[17px] md:text-[24px] leading-[11px] md:leading-[19px]'>Create an Account</h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <DefaultInput 
                              value={formData.name} 
                              label={"Organization Name"} 
                              name={"organizationName"} 
                              placeholder=" "
                              onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                              required 
                            />
                            <DefaultInput 
                              value={formData.email} 
                              label={"Organization Email Address"} 
                              name={"email"} 
                              placeholder=" "
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required 
                            />
                            <DefaultInput 
                              value={formData.Phone} 
                              label={"Organization Phone Number"} 
                              name={"phone"} 
                              placeholder=" "
                              onChange={(e) => setFormData({ ...formData, Phone: e.target.value })}
                              required 
                              type='text'
                            />
                            <div className='block'>
                              <DefaultInput 
                                value={formData.password} 
                                leftIcon={<LockKeyhole className={'size-4 text-gray-300'} />}
                                label={"Password"} 
                                name={"password"} 
                                placeholder=" "
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required 
                                mask={false} 
                                />
                                <div className='flex items-start gap-0.5 mt-1'>
                                    <img src={Warning} className='w-4 h-4' alt="" />
                                  <p className='font-light text-[11px] md:text-[14px] leading-[100%] text-[#1e1e1e]'>
                                    The password should contain more than eight characters, including a caplocks, a number and a special character.
                                  </p>
                                </div>
                              </div>

                            <DefaultInput 
                              leftIcon={<LockKeyhole className={'size-4 text-gray-300'} />} 
                              type={'password'} 
                              placeholder={"Confirm password"} 
                              className={'placeholder:text-gray-300'} 
                              label={"Password"} 
                              name={"password"} 
                              onChange={(e) => setFormData({ ...formData, password: e.target.value })}      
                            />

                            <div className='grid gap-2'>
                              <Button type="submit" onClick={handleRegister} className="w-full bg-[#AFB2B6] border-2 border-[#AFB2B6] hover:bg-[#1B1E69] hover:border-[#1B1E69] text-white transition duration-500">
                                Register
                              </Button>
                              <p className='my-3 text-[14px] text-center font-medium'>
                                <span className='text-[#1C1C1CCC]'>Already have an account? </span>
                                <span className='text-[#1B1E69]'><Link to={'/login'}>Sign In</Link></span>
                              </p>
                              <Button type="submit" onClick={handleRegister} className="w-full bg-white border border-[#AFB2B6] hover:bg-[#1B1E69] hover:border-[#1B1E69] text-black hover:text-white transition duration-500">
                                <img src={Google} alt="" className='inline-block w-5 h-5' /> Continue with Google
                              </Button>
                            </div>
                        </div>
                      </div>
                </div>
            </div>     
            )}
            {type === "individual" && (
            <div className="pb-12 md:pb-0 md:px-10 spans-2 lg:col-span-6 lg:px-20">
                <div className="flex flex-1 items-center justify-center">
                      <div className='w-full max-w-md rounded-lg bg-white px-8 pt-3 pb-2 md:pb-10'>
                        <div className='flex flex-col items-center justify-center mb-6'>
                          <img src={Logo} alt="" className='w-36 md:w-52 '/>
                          <h2 className='text-[#1e1e1e] font-semibold text-[17px] md:text-[24px] leading-[11px] md:leading-[19px]'>Create an Account</h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <DefaultInput 
                              value={formData.name} 
                              label={"First Name"} 
                              name={"firstName"} 
                              placeholder=" "
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required 
                            />
                            <DefaultInput 
                              value={formData.name} 
                              label={"Last Name"} 
                              name={"lastName"} 
                              placeholder=" "
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required 
                            />
                            <DefaultInput 
                              value={formData.email} 
                              label={"Organization Email Address"} 
                              name={"email"} 
                              placeholder=" "
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required 
                            />
                            <DefaultInput 
                              value={formData.Phone} 
                              label={"Organization Phone Number"} 
                              name={"phone"} 
                              placeholder=" "
                              onChange={(e) => setFormData({ ...formData, Phone: e.target.value })}
                              required 
                              type='text'
                            />
                            <div className='block'>
                              <DefaultInput 
                                value={formData.password} 
                                leftIcon={<LockKeyhole className={'size-4 text-gray-300'} />}
                                label={"Password"} 
                                name={"password"} 
                                placeholder=" "
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required 
                                mask={false} 
                                />
                                <div className='flex items-start gap-0.5 mt-1'>
                                    <img src={Warning} className='w-4 h-4' alt="" />
                                  <p className='font-light text-[11px] md:text-[14px] leading-[100%] text-[#1e1e1e]'>
                                    The password should contain more than eight characters, including a caplocks, a number and a special character.
                                  </p>
                                </div>
                              </div>

                            <DefaultInput 
                              leftIcon={<LockKeyhole className={'size-4 text-gray-300'} />} 
                              type={'password'} 
                              placeholder={"Confirm password"} 
                              className={'placeholder:text-gray-300'} 
                              label={"Password"} 
                              name={"password"} 
                              onChange={(e) => setFormData({ ...formData, password: e.target.value })}      
                            />

                            <div className='grid gap-2'>
                              <Button type="submit" onClick={handleRegister} className="w-full bg-[#AFB2B6] border-2 border-[#AFB2B6] hover:bg-[#1B1E69] hover:border-[#1B1E69] text-white transition duration-500">
                                Register
                              </Button>
                              <p className='my-3 text-[14px] text-center font-medium'>
                                <span className='text-[#1C1C1CCC]'>Already have an account? </span>
                                <span className='text-[#1B1E69]'><Link to={'/login'}>Sign In</Link></span>
                              </p>
                              <Button type="submit" onClick={handleRegister} className="w-full bg-white border border-[#AFB2B6] hover:bg-[#1B1E69] hover:border-[#1B1E69] text-black hover:text-white transition duration-500">
                                <img src={Google} alt="" className='inline-block w-5 h-5' /> Continue with Google
                              </Button>
                            </div>
                        </div>
                      </div>
                </div>
            </div>  
            )}
        </div>
  );
};

export default Register;


// <div className="min-h-screen flex items-center justify-center bg-background">
//   <Card className="w-full max-w-md">
//     <CardHeader>
//       <CardTitle>Register</CardTitle>
//       <CardDescription>Create your housing management account</CardDescription>
//     </CardHeader>
//     <CardContent>
//       <form onSubmit={handleRegister} className="space-y-4">
//         <div>
//           <Input
//             type="text"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <Input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <Input
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <Select onValueChange={(value: UserRole) => setFormData({ ...formData, role: value })}>
//             <SelectTrigger>
//               <SelectValue placeholder="Select your role" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="tenant">Tenant</SelectItem>
//               <SelectItem value="landlord">Landlord</SelectItem>
//               <SelectItem value="agent">Agent</SelectItem>
//               <SelectItem value="admin">Admin</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <Button type="submit" className="w-full" disabled={!formData.role}>
//           Register
//         </Button>
//       </form>
//     </CardContent>
//   </Card>
// </div>