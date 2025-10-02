import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { content, fields } from "../../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { getJob, postJob } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { hideOverlay, showOverlay } from "../../Slices/OverlaySlice";

const PostJob = () => {
    const {id} = useParams();
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const select = fields;
    const [editorData, setEditorData] = useState(content);
    const [isLoading, setIsLoading] = useState(false);
    
    // Validate user authentication
    if (!user || !user.id) {
        navigate('/login');
        return null;
    }
    
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            jobTitle: '',
            company: '',
            experience: '',
            jobType: '',
            location: '',
            packageOffered: '',
            skillsRequired: [],
            about: '',
            description: content,
        },
        validate: {
            jobTitle: isNotEmpty('Title cannot be empty'),
            company: isNotEmpty('Company cannot be empty'),
            location: isNotEmpty('Location cannot be empty'),
            about: isNotEmpty('About cannot be empty'),
            description: isNotEmpty('Description cannot be empty'),
            experience: isNotEmpty('Experience cannot be empty'),
            jobType: isNotEmpty('Job Type cannot be empty'),
            packageOffered: isNotEmpty('Salary cannot be empty'),
            skillsRequired: isNotEmpty('Skills cannot be empty')
        }
    });
    
    useEffect(()=>{
        window.scrollTo(0,0);
        
        // Check if we have a valid ID and it's not for new job creation
        const jobId = id ? Number(id) : 0;
        
        if(jobId > 0){  
            // Loading existing job
            dispatch(showOverlay());
            getJob(jobId).then((res)=>{
                if(res && res.id) {
                    form.setValues({
                        jobTitle: res.jobTitle || '',
                        company: res.company || '',
                        experience: res.experience || '',
                        jobType: res.jobType || '',
                        location: res.location || '',
                        packageOffered: res.packageOffered || '',
                        skillsRequired: res.skillsRequired || [],
                        about: res.about || '',
                        description: res.description || content,
                    });
                    setEditorData(res.description || content);
                } else {
                    // Invalid response, treat as new job
                    form.reset();
                    setEditorData(content);
                }
            }).catch((err)=>{
                console.error('Error loading job:', err);
                // If job not found, treat as new job
                form.reset();
                setEditorData(content);
                errorNotification("Info", "Creating new job");
            })
            .finally(()=>dispatch(hideOverlay()));
        } else {
            // For new job (id = 0 or undefined), reset form
            form.reset();
            setEditorData(content);
        }
    }, [id]);
    
    const handlePost = () => {
        const validation = form.validate();
        if (validation.hasErrors) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            errorNotification("Validation Error", "Please fill all required fields");
            return;
        }
        
        setIsLoading(true);
        dispatch(showOverlay());
        
        const jobData = {
            ...form.getValues(),
            id: id ? Number(id) : 0,
            postedBy: user?.id || 0,
            jobStatus: "ACTIVE"
        };
        
        postJob(jobData).then((res) => {
            if(res && res.id) {
                successNotification("Success", "Job Posted Successfully");
                navigate(`/posted-jobs/${res.id}`);
            } else {
                throw new Error("Invalid response from server");
            }
        }).catch((err) => {
            console.error('Error posting job:', err);
            const errorMessage = err?.response?.data?.errorMessage || err?.message || "Failed to post job";
            errorNotification("Error", errorMessage);
        }).finally(() => {
            setIsLoading(false);
            dispatch(hideOverlay());
        });
    }
    const handleDraft = () => {
        setIsLoading(true);
        dispatch(showOverlay());
        
        const jobData = {
            ...form.getValues(),
            id: id ? Number(id) : 0,
            postedBy: user?.id || 0,
            jobStatus: "DRAFT"
        };
        
        postJob(jobData).then((res) => {
            if(res && res.id) {
                successNotification("Success", "Job Saved as Draft");
                navigate(`/posted-jobs/${res.id}`);
            } else {
                throw new Error("Invalid response from server");
            }
        }).catch((err) => {
            console.error('Error saving draft:', err);
            const errorMessage = err?.response?.data?.errorMessage || err?.message || "Failed to save draft";
            errorNotification("Error", errorMessage);
        }).finally(() => {
            setIsLoading(false);
            dispatch(hideOverlay());
        });
    }
    try {
        return (
            <div data-aos="zoom-out" className="px-16 bs-mx:px-10 md-mx:px-5 py-5">
                <div className="text-2xl font-semibold mb-5">Post a Job</div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:!w-full sm-mx:flex-wrap">
                        <SelectInput form={form} name="jobTitle" {...select[0]} />
                        <SelectInput form={form} name="company" {...select[1]} />
                    </div>
                    <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:!w-full sm-mx:flex-wrap">
                        <SelectInput form={form} name="experience" {...select[2]} />
                        <SelectInput form={form} name="jobType" {...select[3]} />
                    </div>
                    <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:!w-full sm-mx:flex-wrap">
                        <SelectInput form={form} name="location" {...select[4]} />
                        <NumberInput 
                            data-aos="zoom-out" 
                            {...form.getInputProps("packageOffered")} 
                            withAsterisk 
                            label="Salary (LPA)" 
                            placeholder="Enter Salary" 
                            hideControls 
                            min={1} 
                            max={300} 
                            clampBehavior="strict" 
                        />
                    </div>
                    <TagsInput 
                        data-aos="zoom-out" 
                        {...form.getInputProps("skillsRequired")} 
                        withAsterisk 
                        label="Skills" 
                        placeholder="Enter skill" 
                        splitChars={[',', ' ', '|']} 
                        clearable 
                    />
                    <Textarea 
                        data-aos="zoom-out" 
                        {...form.getInputProps("about")} 
                        withAsterisk 
                        className="my-3" 
                        label="About Job" 
                        autosize 
                        minRows={2} 
                        placeholder="Enter about job.." 
                    />
                    <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
                        <div className="text-sm font-medium">
                            Job Description<span className="text-red-600"> *</span>
                        </div>
                        <TextEditor data-aos="zoom-out" form={form} data={editorData} />
                    </div>
                    <div className="flex gap-4">
                        <Button 
                            data-aos="zoom-out" 
                            color="brightSun.4" 
                            onClick={handlePost} 
                            variant="light"
                            loading={isLoading}
                            disabled={isLoading}
                        >
                            Publish Job
                        </Button>
                        <Button 
                            data-aos="zoom-out" 
                            color="brightSun.4" 
                            onClick={handleDraft} 
                            variant="outline"
                            loading={isLoading}
                            disabled={isLoading}
                        >
                            Save as Draft
                        </Button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('PostJob component error:', error);
        return (
            <div className="px-16 bs-mx:px-10 md-mx:px-5 py-5">
                <div className="text-2xl font-semibold mb-5 text-red-600">
                    Error Loading Post Job Page
                </div>
                <p>Please try refreshing the page or contact support if the problem persists.</p>
                <Button onClick={() => window.location.reload()} variant="outline" color="red">
                    Refresh Page
                </Button>
            </div>
        );
    }
}
export default PostJob;